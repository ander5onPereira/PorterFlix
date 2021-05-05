import React, { useEffect, useState } from 'react'
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import { API_KEY } from '../../../config'
import { ITResult } from '../../interfaces/ITResult'
import { ITUpcoming } from '../../interfaces/ITUpcoming'
import Cartas from "./components/Cartas"
import Loading from './components/Loading'
import Post from "./components/Post"



const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;


export default function ScrollInfinito() {
  const [feed, setFeed] = useState<Array<ITResult>>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);

  async function loadPage(pageNumber = page, shouldRefresh = false) {
    if (total && pageNumber > total) return;
    setLoading(true);
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?language=pt-BR&page=${pageNumber}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + API_KEY
      }
    });
    const data: ITUpcoming = await response.json();
    setFeed(shouldRefresh ? data.results : [...feed, ...data.results]);
    setTotal(data.total_pages);
    setPage(pageNumber + 1);
    setLoading(false);
  }
  useEffect(() => {
    loadPage();
  }, [])

  async function refreshList() {
    setRefresh(true);
    await loadPage(1, true);
    setRefresh(false);
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={feed}
        keyExtractor={post => String(post.id)}
        onEndReached={() => loadPage()}
        onEndReachedThreshold={0.20}
        ListFooterComponent={loading ? <Loading /> : null}
        onRefresh={refreshList}
        refreshing={refresh}
        renderItem={({ item, index }) => (
          <Post >
            <Cartas source={{ uri: item.poster_path }} />
            <View style={{ marginLeft: 10, justifyContent: "space-around" }}>
              <View style={{ width: screenWidth * 0.55, alignItems: "center", justifyContent: "center", height: "40%" }}>
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>{item.title}</Text>
              </View>
              <View>
                <Text>Lançamento: {item.release_date}</Text>
              </View>
            </View>
            <View style={{ marginLeft: 10, justifyContent: "space-around" }}>
              <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontWeight: "bold", fontSize: 18, color: "#0D6E9C" }}>{item.vote_average}</Text>
              </View>
              <View style={{ alignItems: "center", justifyContent: "center", marginBottom: 10 }}>
                <View>
                  <Text>Votos</Text>
                </View>
                <View>
                  <Text>{item.vote_count}</Text>
                </View>
              </View>
            </View>
          </Post>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    backgroundColor: "rgba(10, 22, 38,0.7)"
  }
})
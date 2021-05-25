import "react-native-gesture-handler";
import React, { useState, useLayoutEffect } from "react";
import { Dimensions, FlatList, StyleSheet, View } from "react-native";
import { TOKEN } from "../../../config";
import { ITResult } from "../../interfaces/ITResult";
import { ITUpcoming } from "../../interfaces/ITUpcoming";
import Loading from "./components/Loading";
import ItemList from "./components/ItemList";

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
      `https://api.themoviedb.org/3/movie/upcoming?language=pt-BR&page=${pageNumber}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + TOKEN,
        },
      }
    );
    const data: ITUpcoming = await response.json();
    setFeed(shouldRefresh ? data.results : [...feed, ...data.results]);
    setTotal(data.total_pages);
    setPage(pageNumber + 1);
    setLoading(false);
  }
  useLayoutEffect(() => {
    loadPage();
  }, []);

  async function refreshList() {
    setRefresh(true);
    await loadPage(1, true);
    setRefresh(false);
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={feed}
        keyExtractor={(post) => String(post.id)}
        onEndReached={() => loadPage()}
        onEndReachedThreshold={0.2}
        ListFooterComponent={loading ? <Loading /> : null}
        onRefresh={refreshList}
        refreshing={refresh}
        renderItem={({ item }) => <ItemList data={item} />}
      />
    </View>
  );
}

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: "100%",
    backgroundColor: "rgba(10, 22, 38,0.7)",
  },
});

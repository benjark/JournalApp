import React, { useState, useEffect, useCallback } from "react";
import { View, SafeAreaView, FlatList } from "react-native";
import { Card, HomeHeader, FocusedStatusBar } from "../components";
import { COLORS } from "../constants";
import { firebase, db, journalsCollection } from "../config";

const Home = () => {
  const [journals, setJournals] = useState([]);
  const [data, setData] = useState([]);

  const handleSearch = useCallback(
    (value) => {
      if (value.length === 0) {
        setJournals(data);
      } else {
        const filteredData = data.filter((item) =>
          item.journalEntry.toLowerCase().includes(value.toLowerCase())
        );
        setJournals(filteredData);
      }
    },
    [data]
  );

  useEffect(() => {
    const unsubscribe = journalsCollection.onSnapshot((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setJournals(data);
      setData(data);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.primary, flex: 1 }}>
      <FocusedStatusBar translucent={false} backgroundColor={COLORS.primary} />

      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={journals}
            renderItem={({ item }) => <Card data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>

        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 160, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

import React from "react";
import Gradient from "@/assets/Icons/Gradient";
import DocumentData from "@/assets/Icons/DocumentData";
import LightBulbPerson from "@/assets/Icons/LightbulbPerson";
import Rocket from "@/assets/Icons/Rocket";
import Logo from "@/assets/Icons/Logo";
import { Box } from "@/components/ui/box";
import { ScrollView } from "react-native";
import { Text } from "@/components/ui/text";

import { Link } from "expo-router";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Button } from "@/components/ui/button";
import { Pressable } from "@/components/ui/pressable";
import { Image } from "@/components/ui/image";
import {
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@/components/ui/modal";
import Animated, {
  FadeIn,
  FadeOut,
  SlideInRight,
  SlideOutLeft,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from "react-native-reanimated";

export default function Home() {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedMovie, setSelectedMovie] = React.useState(null);

  const heroMovies = [
    {
      id: 1,
      title: "Stranger Things",
      image:
        "https://images.pexels.com/photos/2220315/pexels-photo-2220315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      title: "The Witcher",
      image:
        "https://images.pexels.com/photos/2220315/pexels-photo-2220315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  const categories = [
    {
      name: "Netflix Originals",
      movies: [
        {
          id: 1,
          title: "Bridgerton",
          image:
            "https://images.pexels.com/photos/2220315/pexels-photo-2220315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          id: 2,
          title: "Money Heist",
          image:
            "https://images.pexels.com/photos/2220315/pexels-photo-2220315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          id: 3,
          title: "Black Mirror",
          image:
            "https://images.pexels.com/photos/2220315/pexels-photo-2220315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
      ],
    },
    {
      name: "Trending Now",
      movies: [
        {
          id: 4,
          title: "Wednesday",
          image:
            "https://images.pexels.com/photos/2220315/pexels-photo-2220315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          id: 5,
          title: "You",
          image:
            "https://images.pexels.com/photos/2220315/pexels-photo-2220315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          id: 6,
          title: "Squid Game",
          image:
            "https://images.pexels.com/photos/2220315/pexels-photo-2220315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
      ],
    },
  ];

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
    setModalVisible(true);
  };

  const [heroIndex, setHeroIndex] = React.useState(0);
  const scrollViewRef = React.useRef(null);

  // const heroMovies = [
  //   { id: 1, title: "Stranger Things", image: "/api/placeholder/300/500" },
  //   { id: 2, title: "The Witcher", image: "/api/placeholder/300/500" },
  // ];

  // const categories = [
  //   {
  //     name: "Netflix Originals",
  //     movies: [
  //       { id: 1, title: "Bridgerton", image: "/api/placeholder/200/300" },
  //       { id: 2, title: "Money Heist", image: "/api/placeholder/200/300" },
  //       { id: 3, title: "Black Mirror", image: "/api/placeholder/200/300" },
  //     ],
  //   },
  //   {
  //     name: "Trending Now",
  //     movies: [
  //       { id: 4, title: "Wednesday", image: "/api/placeholder/200/300" },
  //       { id: 5, title: "You", image: "/api/placeholder/200/300" },
  //       { id: 6, title: "Squid Game", image: "/api/placeholder/200/300" },
  //     ],
  //   },
  // ];

  // const handleMovieSelect = (movie) => {
  //   setSelectedMovie(movie);
  //   setModalVisible(true);
  // };

  const handleHeroScroll = (event) => {
    const newIndex = Math.round(
      event.nativeEvent.contentOffset.x /
        event.nativeEvent.layoutMeasurement.width
    );
    setHeroIndex(newIndex);
  };

  const scaleValue = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: withSpring(scaleValue.value) }],
    };
  });

  const pressableAnimationStyle = {
    pressIn: () => {
      scaleValue.value = 0.95;
    },
    pressOut: () => {
      scaleValue.value = 1;
    },
  };

  return (
    <Box className="flex-1 bg-black flex justify-center items-center">
      {/* Animated Header */}
      <Animated.View
        entering={SlideInRight}
        exiting={SlideOutLeft}
        className="px-4 pt-12 pb-4 justify-between items-center flex-row"
      >
        <Text className="text-red-600 text-2xl font-bold">N</Text>
        <HStack className="gap-4">
          {/* <Search color="white" />
          <Menu color="white" /> */}
        </HStack>
      </Animated.View>

      <ScrollView>
        {/* Hero Section with Animations */}
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          onScroll={handleHeroScroll}
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          className="mb-4"
        >
          {heroMovies.map((movie, index) => (
            <Animated.View
              key={movie.id}
              entering={FadeIn.delay(index * 300)}
              exiting={FadeOut}
              className="w-full"
            >
              <Image
                source={{ uri: movie.image }}
                alt={movie.title}
                className="w-full h-[500px]"
                resizeMode="cover"
              />
              <Box className=" bg-black p-4">
                <Animated.Text
                  entering={SlideInRight.delay(200)}
                  className="text-white text-2xl font-bold"
                >
                  {movie.title}
                </Animated.Text>
                <HStack className="space-x-2 mt-2">
                  <Animated.View
                    entering={SlideInRight.delay(400)}
                    style={animatedStyle}
                  >
                    <Button
                      className="bg-white "
                      onPressIn={pressableAnimationStyle.pressIn}
                      onPressOut={pressableAnimationStyle.pressOut}
                    >
                      <Text className="text-black">Play</Text>
                    </Button>
                  </Animated.View>
                  <Animated.View
                    entering={SlideInRight.delay(600)}
                    style={animatedStyle}
                  >
                    <Button
                      variant="outline"
                      className="border border-white "
                      onPressIn={pressableAnimationStyle.pressIn}
                      onPressOut={pressableAnimationStyle.pressOut}
                    >
                      <Text className="text-white">More Info</Text>
                    </Button>
                  </Animated.View>
                </HStack>
              </Box>
            </Animated.View>
          ))}
        </ScrollView>

        {/* Hero Indicator */}
        <HStack className="justify-center space-x-2 mb-4">
          {heroMovies.map((_, index) => (
            <Box
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === heroIndex ? "bg-white" : "bg-gray-500"
              }`}
            />
          ))}
        </HStack>

        {/* Categories with Animations */}
        {categories.map((category, categoryIndex) => (
          <Animated.View
            key={category.name}
            entering={FadeIn.delay(categoryIndex * 300)}
            className="mb-4"
          >
            <Text className="text-white text-lg font-bold px-4 mb-2">
              {category.name}
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <HStack className="space-x-2 px-4">
                {category.movies.map((movie, movieIndex) => (
                  <Animated.View
                    key={movie.id}
                    entering={SlideInRight.delay(movieIndex * 200)}
                    style={animatedStyle}
                  >
                    <Pressable
                      onPress={() => handleMovieSelect(movie)}
                      onPressIn={pressableAnimationStyle.pressIn}
                      onPressOut={pressableAnimationStyle.pressOut}
                    >
                      <Image
                        source={{ uri: movie.image }}
                        alt={movie.title}
                        className="w-[150px] h-[230px] rounded-lg"
                      />
                    </Pressable>
                  </Animated.View>
                ))}
              </HStack>
            </ScrollView>
          </Animated.View>
        ))}
      </ScrollView>

      {/* Animated Modal */}
      <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)}>
        <ModalBackdrop />
        <Animated.View entering={SlideInRight} exiting={SlideOutLeft}>
          <ModalContent className="w-11/12">
            <ModalHeader>
              <Text className="flex-1">{selectedMovie?.title}</Text>
              <ModalCloseButton onPress={() => setModalVisible(false)}>
                {/* <X color="black" /> */}
              </ModalCloseButton>
            </ModalHeader>
            <ModalBody>
              <Animated.View entering={FadeIn.delay(200)} style={animatedStyle}>
                <Image
                  source={{ uri: selectedMovie?.image }}
                  alt={selectedMovie?.title}
                  className="w-full h-[400px] rounded-lg mb-4"
                />
              </Animated.View>
              <Text className="text-black mb-2">Movie Description</Text>
              <Animated.Text
                entering={SlideInRight.delay(400)}
                className="text-gray-700"
              >
                A brief synopsis about the selected movie would appear here.
              </Animated.Text>
              <Animated.View
                entering={SlideInRight.delay(600)}
                style={animatedStyle}
              >
                <Button
                  className="mt-4 bg-red-600"
                  onPressIn={pressableAnimationStyle.pressIn}
                  onPressOut={pressableAnimationStyle.pressOut}
                >
                  <Text className="text-white">Watch Now</Text>
                </Button>
              </Animated.View>
            </ModalBody>
          </ModalContent>
        </Animated.View>
      </Modal>
    </Box>
  );
}

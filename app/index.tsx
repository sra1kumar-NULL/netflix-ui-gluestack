import React from "react";
import { Box } from "@/components/ui/box";
import { ScrollView } from "@/components/ui/scroll-view";
import { Text } from "@/components/ui/text";

import { Link } from "expo-router";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";
import { Button, ButtonIcon, ButtonText } from "@/components/ui/button";
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
import {
  ChevronDownIcon,
  DownloadIcon,
  Icon,
  SearchIcon,
} from "@/components/ui/icon";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Home() {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedMovie, setSelectedMovie] = React.useState(null);

  const heroMovies = [
    {
      id: 1,
      title: "Stranger Things",
      image:
        "https://images.pexels.com/photos/436413/pexels-photo-436413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
            "https://images.pexels.com/photos/436413/pexels-photo-436413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          id: 2,
          title: "Money Heist",
          image:
            "https://images.pexels.com/photos/436413/pexels-photo-436413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          id: 3,
          title: "Black Mirror",
          image:
            "https://images.pexels.com/photos/436413/pexels-photo-436413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          id: 4,
          title: "Black Mirror",
          image:
            "https://images.pexels.com/photos/436413/pexels-photo-436413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          id: 5,
          title: "Black Mirror",
          image:
            "https://images.pexels.com/photos/436413/pexels-photo-436413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          id: 6,
          title: "Black Mirror",
          image:
            "https://images.pexels.com/photos/436413/pexels-photo-436413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          id: 7,
          title: "Black Mirror",
          image:
            "https://images.pexels.com/photos/436413/pexels-photo-436413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          id: 8,
          title: "Black Mirror",
          image:
            "https://images.pexels.com/photos/436413/pexels-photo-436413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
            "https://images.pexels.com/photos/436413/pexels-photo-436413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          id: 5,
          title: "You",
          image:
            "https://images.pexels.com/photos/436413/pexels-photo-436413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          id: 6,
          title: "Squid Game",
          image:
            "https://images.pexels.com/photos/436413/pexels-photo-436413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          id: 7,
          title: "Squid Game",
          image:
            "https://images.pexels.com/photos/436413/pexels-photo-436413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          id: 8,
          title: "Squid Game",
          image:
            "https://images.pexels.com/photos/436413/pexels-photo-436413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
      ],
    },
    {
      name: "Crowd Pleasers",
      movies: [
        {
          id: 4,
          title: "Wednesday",
          image:
            "https://images.pexels.com/photos/436413/pexels-photo-436413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          id: 5,
          title: "You",
          image:
            "https://images.pexels.com/photos/436413/pexels-photo-436413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          id: 6,
          title: "Squid Game",
          image:
            "https://images.pexels.com/photos/436413/pexels-photo-436413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          id: 7,
          title: "Squid Game",
          image:
            "https://images.pexels.com/photos/436413/pexels-photo-436413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          id: 8,
          title: "Squid Game",
          image:
            "https://images.pexels.com/photos/436413/pexels-photo-436413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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

  const handleHeroScroll = (event) => {
    const newIndex = Math.round(
      event.nativeEvent.contentOffset.x /
        event.nativeEvent.layoutMeasurement.width
    );
    setHeroIndex(newIndex);
  };

  return (
    <SafeAreaView className="flex-1 bg-black ">
      <StatusBar hidden />
      <Box className="flex-1 flex justify-center items-center">
        {/* Animated Header */}
        <HStack className="px-2 py-2 w-full justify-between items-center">
          <Text className="text-red-600 text-5xl font-bold leading-tight">
            N
          </Text>
          <HStack className="gap-6 items-center">
            <Icon as={DownloadIcon} className="text-white" />
            <Icon as={SearchIcon} className="text-white" />
          </HStack>
        </HStack>
        <HStack className="gap-2 w-full justify-start pb-4">
          <Button variant="outline" className="rounded-full" size="sm">
            <ButtonText className="text-primary-50 font-light">
              TV Shows
            </ButtonText>
          </Button>
          <Button variant="outline" className="rounded-full" size="sm">
            <ButtonText className="text-primary-50 font-light">
              Movies
            </ButtonText>
          </Button>
          <Button variant="outline" className="rounded-full" size="sm">
            <ButtonText className="text-primary-50 font-light">
              Categories
            </ButtonText>
            <ButtonIcon
              as={ChevronDownIcon}
              className="text-primary-50"
              size="md"
            />
          </Button>
        </HStack>

        <ScrollView>
          <Box className="border border-outline-700 rounded-xl">
            <VStack className="p-1  rounded-lg">
              {heroMovies.map((movie, index) => (
                <Box key={movie.id}>
                  <Image
                    source={{ uri: movie.image }}
                    alt={movie.title}
                    className="w-full h-[500px]"
                    // resizeMode="cover"
                  />
                  <VStack className="bg-black p-4">
                    <Text className="text-white text-2xl font-bold">
                      {movie.title}
                    </Text>
                    <HStack className="mt-2 justify-between items-center gap-3">
                      <Box className="flex-1">
                        <Button className="bg-white ">
                          <Text className="text-black">Play</Text>
                        </Button>
                      </Box>
                      <Box className="flex-1">
                        <Button variant="outline">
                          <Text className="text-white">More Info</Text>
                        </Button>
                      </Box>
                    </HStack>
                  </VStack>
                </Box>
              ))}
            </VStack>
          </Box>
          {/* Hero Indicator */}
          <HStack className="justify-center gap-2 mb-4 ">
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
            <Box key={category.name} className="mb-4">
              <Text className="text-white text-lg font-bold px-4 mb-2">
                {category.name}
              </Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <HStack className="gap-2 px-4">
                  {category.movies.map((movie, movieIndex) => (
                    <Box key={movie.id} className="rounded-lg">
                      <Pressable onPress={() => handleMovieSelect(movie)}>
                        <Image
                          source={{ uri: movie.image }}
                          alt={movie.title}
                          className="w-[100px] h-[200px] "
                        />
                      </Pressable>
                    </Box>
                  ))}
                </HStack>
              </ScrollView>
            </Box>
          ))}
        </ScrollView>

        {/* Animated Modal */}
        <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)} >
          <ModalBackdrop />
          <ModalContent className="w-11/12 bg-black border-[0px]">
            <ModalHeader>
              <Text className="flex-1 text-gray-100">
                {selectedMovie?.title}
              </Text>
              <ModalCloseButton onPress={() => setModalVisible(false)}>
                {/* <X color="black" /> */}
              </ModalCloseButton>
            </ModalHeader>
            <ModalBody>
              <Box>
                <Image
                  source={{ uri: selectedMovie?.image }}
                  alt={selectedMovie?.title}
                  className="w-full h-[400px] rounded-lg mb-4"
                />
              </Box>
              <Text className="text-black mb-2">Movie Description</Text>
              <Text className="text-gray-100">
                A brief synopsis about the selected movie would appear here.
              </Text>
              <Box>
                <Button className="mt-4 bg-red-600">
                  <Text className="text-white">Watch Now</Text>
                </Button>
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </SafeAreaView>
  );
}

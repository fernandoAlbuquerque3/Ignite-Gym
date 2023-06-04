import { useState } from "react"
import { Center, ScrollView, VStack, Skeleton } from "native-base"

import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";

const PHOTO_SIZE = 33;

export function Profile() {
  const [photoIsLoading, setIsLoading] = useState(false);

  return (
    <VStack>
      <ScreenHeader title="Perfil" />

      <ScrollView>
        <Center mt={6} px={10}>
          {photoIsLoading ? (
            <Skeleton
              w={PHOTO_SIZE}
              h={PHOTO_SIZE}
              rounded={"full"}
              startColor={"gray.500"}
              endColor={"gray.400"}
            />
          ) : (
            <UserPhoto
              source={{
                uri: "https://instagram.fjdo10-1.fna.fbcdn.net/v/t51.2885-19/350239529_648198526780974_3904291298932139482_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fjdo10-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=Q_SjwvijdmEAX8XORs_&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfBVZ7w8dDcbBvQaISsFjfe22NDvMUf9mUh-v2dWAfX1CA&oe=64821A7E&_nc_sid=f70a57",
              }}
              alt="foto de perfil do usuário"
              size={PHOTO_SIZE}
            />
          )}
        </Center>
      </ScrollView>
    </VStack>
  )
}

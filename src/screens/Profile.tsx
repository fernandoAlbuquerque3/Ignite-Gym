import { useState } from "react"
import {
  Center,
  ScrollView,
  VStack,
  Skeleton,
  Text,
  Heading,
} from "native-base"
import { TouchableOpacity } from "react-native"
import * as ImagePicker from 'expo-image-picker';

import { ScreenHeader } from "@components/ScreenHeader"
import { Input } from "@components/Input"
import { UserPhoto } from "@components/UserPhoto"
import { Button } from "@components/Button"

const PHOTO_SIZE = 33

export function Profile() {
  const [photoIsLoading, setIsLoading] = useState(false)

  async function handleUserPhotoSelect() {
    await ImagePicker.launchImageLibraryAsync() //acessar album
  }

  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />

      <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
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

          <TouchableOpacity onPress={handleUserPhotoSelect}>
            <Text
              color={"green.500"}
              fontWeight={"bold"}
              fontSize={"md"}
              mt={2}
              mb={8}
            >
              Alterar foto
            </Text>
          </TouchableOpacity>

          <Input placeholder="Nome" bg={"gray.600"} />
          <Input bg={"gray.600"} value="E-mail" isDisabled />

          <Heading
            color={"gray.200"}
            fontSize={"md"}
            mb={2}
            alignSelf={"flex-start"}
            mt={12}
          >
            Alterar senha
          </Heading>

          <Input bg={"gray.600"} placeholder="Senha antiga." secureTextEntry />
          <Input bg={"gray.600"} placeholder="Nova senha" secureTextEntry />
          <Input
            bg={"gray.600"}
            placeholder="Confirme sua senha"
            secureTextEntry
          />

          <Button title="Atualizar" mt={4} />
        </Center>
      </ScrollView>
    </VStack>
  )
}

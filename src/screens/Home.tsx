import { useState } from "react"
import { Group } from "@components/Group"
import { HomeHeader } from "@components/HomeHeader"
import { HStack, VStack } from "native-base"

export function Home() {
  
  const [groupSelected, setGroupSelected] = useState('costa');

  return (
    <VStack flex={1}>
      <HomeHeader />

      <HStack>
        <Group
          name="costas"
          isActive={groupSelected === "costa"}
          onPress={() => setGroupSelected("costa")}
        />
        <Group
          name="ombro"
          isActive={groupSelected === "ombro"}
          onPress={() => setGroupSelected("ombro")}
        />
      </HStack>
    </VStack>
  )
}

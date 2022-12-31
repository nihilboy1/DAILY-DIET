import { Image } from "react-native";

import * as S from "./styles";

export function ProfileBox() {
  return (
    <S.Container>
      <Image source={require("../../../assets/dailydiet-logo.png")} />
      <Image source={require("../../../assets/avatar.png")} />
    </S.Container>
  );
}

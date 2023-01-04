import { Image } from "react-native";
import logo from "../../../assets/dailydiet-logo.png";
import avatar from "../../../assets/avatar.png";

import * as S from "./styles";

export function ProfileBox() {
  return (
    <S.Container>
      <Image source={logo} />
      <Image source={avatar} />
    </S.Container>
  );
}

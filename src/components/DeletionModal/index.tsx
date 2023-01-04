import { DefaultGrayButton } from "../DefaultGrayButton";
import * as S from "./styles";
import { Modal } from "react-native";

interface DeletionModalProps {
  modalVisible: boolean;
  setModalVisible: (value: boolean) => void;
  deleteAndMoveToHome: () => void;
}

export function DeletionModal({
  modalVisible,
  setModalVisible,
  deleteAndMoveToHome,
}: DeletionModalProps) {
  return (
    <Modal
      statusBarTranslucent
      transparent
      animationType="slide"
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <S.ContentModalBox
        style={{
          backgroundColor: modalVisible ? "rgba(0, 0, 0, 0.4)" : "",
        }}
      >
        <S.ConfirmDeletionBox
          style={{
            position: "absolute",
            alignSelf: "center",
            top: "48%",
          }}
        >
          <S.Title>Deseja realmente excluir o registro da refeição?</S.Title>
          <S.ButtonsBox>
            <DefaultGrayButton
              text="Cancelar"
              negativeColors
              onPress={() => setModalVisible(false)}
              disabled={false}
            />
            <DefaultGrayButton
              text="Sim, excluir"
              onPress={deleteAndMoveToHome}
              disabled={false}
            />
          </S.ButtonsBox>
        </S.ConfirmDeletionBox>
      </S.ContentModalBox>
    </Modal>
  );
}

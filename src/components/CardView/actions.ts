import { fetchGetCarData } from "../../api/getCars";
import { CarModel } from "./props";

export const loadCarData = async (
  id: number,
  setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>
) => {
  try {
    const data = await fetchGetCarData(id);

    if (data) {
      setCarData(data);
    }
  } catch (error) {
    console.log("Erro ao executar action", error);
  }
};

export const handlePreviousItem = async (
  carData: CarModel | null,
  setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>
) => {
  try {
    let data = null;
    if (carData && carData.id > 1) {
      data = await fetchGetCarData(carData.id - 1);
    }

    if (data) {
      setCarData(data);
    }
  } catch (error) {
    console.log("Erro ao chamar a api", error);
  }
};

export const handleNextItem = async (
  carData: CarModel | null,
  setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>
) => {
  try {
    let data = null;
    if (carData && carData.id < 10) {
      data = await fetchGetCarData(carData.id + 1);
    }

    if (data) {
      setCarData(data);
    }
  } catch (error) {
    console.log("Erro ao chamar a api", error);
  }
};

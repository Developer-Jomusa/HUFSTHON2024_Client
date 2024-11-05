import {Dimensions} from "react-native";

export const getPercentage = (count: number, total: number) => {
    return total > 0 ? ((count / total) * 100).toFixed(2) : "0.00";
};

import { useNavigation, useRoute } from "@react-navigation/native";

/**
 * This is a workaround to avoid the following typescript error:
 * Argument of type '...' is not assignable to parameter of type 'never
 */

export const useAppNavigation = useNavigation as any;
export const useAppRoute = useRoute as any;
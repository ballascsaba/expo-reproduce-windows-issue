import {Redirect, useRootNavigationState} from "expo-router";


const Index = () => {
  const rootNavigationState = useRootNavigationState();

  if (!rootNavigationState?.key) return null;

  return <Redirect href="/content" />;
};

export default Index;

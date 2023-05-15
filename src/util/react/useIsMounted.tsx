import React from "react";

function useIsMounted() {
  const [isMounted, setIsMounted] = React.useState(false);
  React.useEffect(() => {
    setIsMounted(true);
  }, []);
  return [isMounted];
}

function compose<U>(...fns: Function[]) {
  return <E,>(initialValue: any): U =>
    fns.reduceRight((prevValue, fn) => fn(prevValue), initialValue);
}

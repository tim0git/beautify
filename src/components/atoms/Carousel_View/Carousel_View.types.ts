export type NativeEvent = {
  nativeEvent: {
    layout: {
      width: number;
      height: number;
    };
  };
};

export type OnboardingCard = {
  title: string;
  body: string;
  image: string;
};

export type Item = {
  item: OnboardingCard;
};

export type CarouselComponent = (item: any) => React.Component | null;

import { YStack, styled } from "tamagui";
const variants = {
  hide: {
    true: {
      pointerEvents: "none",
      opacity: 0
    }
  }
}, Container = styled(YStack, {
  mx: "auto",
  px: "$4",
  width: "100%",
  $gtSm: {
    maxWidth: 700,
    pr: "$2"
  },
  $gtMd: {
    maxWidth: 740,
    pr: "$2"
  },
  $gtLg: {
    maxWidth: 800,
    pr: "$10"
  },
  variants
}), ContainerLarge = styled(YStack, {
  mx: "auto",
  px: "$4",
  width: "100%",
  $gtSm: {
    maxWidth: 980
  },
  $gtMd: {
    maxWidth: 1140
  },
  variants
}), ContainerXL = styled(YStack, {
  mx: "auto",
  px: "$4",
  width: "100%",
  $gtSm: {
    maxWidth: 980
  },
  $gtMd: {
    maxWidth: 1240
  },
  $gtLg: {
    maxWidth: 1440
  },
  variants
});
export {
  Container,
  ContainerLarge,
  ContainerXL
};
//# sourceMappingURL=Container.js.map

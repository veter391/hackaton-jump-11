import { CustomFooter as Footer } from "./Footer";
import { CustomHeader as Header } from "./Header";
import { ToastProvider, ToastViewport } from "@tamagui/toast";
const DefaultLayout = ({
  children,
  header,
  footer,
  headerProps
}) => <><ToastProvider swipeDirection="horizontal">
  {header ?? <Header {...headerProps} />}
  {children}
  {footer ?? <Footer />}
  <ToastViewport flexDirection="column-reverse" top="$2" left={0} right={0} />
  <ToastViewport
    multipleToasts
    name="viewport-multiple"
    flexDirection="column-reverse"
    top="$2"
    left={0}
    right={0}
  />
</ToastProvider></>;
export {
  DefaultLayout
};
//# sourceMappingURL=DefaultLayout.js.map

import { H4, ListItem, XStack, YStack } from "tamagui";
function DataTable({
  schema,
  title = "Data",
  data
}) {
  return <YStack
    borderWidth={1}
    borderColor="$borderColor"
    f={1}
    my="$4"
    br="$4"
    ov="hidden"
    mx="$-4"
    $sm={{
      mx: 0
    }}
  >
    <XStack ai="center" py="$2" px="$4" backgroundColor="$borderColor">{schema.map((key, index) => <YStack ai="center" key={index} f={1}>{key}</YStack>)}</XStack>
    {data.map((item, i) => <ListItem key={i} p={0}>{schema.map((key) => (console.log("Item", item, "KEY: ", key, "VAL: ", item[key]), <YStack f={1}><XStack
      ai="center"
      f={1}
      pos="relative"
      py="$2"
      bc="$backgroundStrong"
      px="$4"
      $sm={{ flexDirection: "column" }}
    >
      <YStack fullscreen backgroundColor="$background" zi={-1} o={0.5} />
      <XStack miw="30%" ai="center" space><H4
        ta="center"
        color="$color"
        fow="700"
        textTransform="none"
        size="$4"
        width={200}
      >{item[key]}</H4></XStack>
    </XStack></YStack>))}</ListItem>)}
  </YStack>;
}
export {
  DataTable
};
//# sourceMappingURL=index.js.map

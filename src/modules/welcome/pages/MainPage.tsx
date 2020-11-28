/** i18n-ally useTranslation("welcome") */
import React from "react";
// import { setAppSideDrawer } from "@faharmony/core";
import { useModule } from "@faharmony/module";
import { PageView } from "@faharmony/views";
// import { ITabsProps } from "@faharmony/navigation";
import { Box } from "@faharmony/theme";
import {
  Text,
  Button,
  RingLoader,
  // ButtonPopover,
} from "@faharmony/components";
import { useDispatch, useModuleState } from "@faharmony/state";
import { ModuleActions, IState } from "../state";

export const Redux = () => {
  const { t } = useModule();
  const dispatch = useDispatch();
  const state = useModuleState<IState>();
  return (
    <Box justifyContent="flex-start">
      <Box width="auto">
        <Button
          value="Start"
          onClick={() => dispatch(ModuleActions.startLoading())}
        />
        <Button
          value="Stop"
          onClick={() => dispatch(ModuleActions.stopLoading())}
        />
        <Button
          value="Toggle"
          onClick={() => dispatch(ModuleActions.setLoading(!state.loading))}
        />
      </Box>
      {state.loading && <RingLoader />}
      <Text value={t("loading")} />
    </Box>
  );
};

// const ApolloRest = () => {
//   const query = gql`
//     query Roles {
//       groups @rest(type: "Group", path: "groups", endpoint: "keycloak") {
//         id
//         name
//         realmRoles
//         clientRoles
//         subGroups
//         attributes
//       }
//     }
//   `;
//   const { data, loading, error } = useQuery(query);
//   console.dir(data);
//   return (
//     <div>
//       {loading
//         ? "Loading..."
//         : error
//         ? "Error"
//         : JSON.stringify(data.groups, null, 2)}
//     </div>
//   );
// };

// const Counter = () => {
//   const [count, setCount] = React.useState(0);
//   React.useEffect(() => {
//     const t = setInterval(() => setCount((c) => c + 1), 1000);
//     return () => {
//       clearInterval(t);
//     };
//   }, []);
//   return <Center>{count}</Center>;
// };

/**
 * Default page of module
 * @author Siddhant Gupta <siddhant@fasolutions.com>
 */
export const MainPage = () => {
  const { t } = useModule();

  // const tabs: ITabsProps[] = [
  //   {
  //     id: "1",
  //     label: "Preview NAV",
  //     content: <Center>1</Center>,
  //     defaultActive: true,
  //   },
  //   {
  //     id: "2",
  //     label: "Portfolio",
  //     content: <Counter />,
  //     // disabled: true,
  //   },
  //   { id: "3", label: "Warnings", content: <Center>3</Center> },
  // ];

  // const { TabBar } = useTabs([...tabs]);
  // const openSide = () =>
  //   setAppSideDrawer({
  //     caption: "Calculated nav",
  //     heading: "FA Equity +",
  //     toolbarContent: <div />,
  //     tabs,
  //   });

  // setTimeout(openSide, 100);

  return (
    <PageView
      caption={"Test"}
      heading={t("moduleName")}
      toolbarContent={<Text variant="h4" value="Harmony" />}
      // actions={<ButtonPopover value="Open" onClick={openSide} spacing="sm" />}
      children={<Redux />}
    />
  );
};

// is FA Solutions' framework for React-app development
import React, { createRef } from "react";
import SideMenu from "react-native-drawer";
import { useSelector, useDispatch } from "react-redux";
import { closeDrawer } from "@redux/reducers/drawer/action";
import { DrawerContent } from "./drawerContent";

const MenuItem = (props) => {
  let drawer = createRef(null);
  const isOpenDrawer = useSelector((state) => state.drawer.isOpen);
  const dispatch = useDispatch();

  const toggleMenu = (isOpen) => {
    dispatch(closeDrawer(false));
  };

  return (
    <SideMenu
      ref={(_drawer) => (drawer = _drawer)}
      type="overlay"
      tapToClose
      open={isOpenDrawer}
      onClose={() => toggleMenu(isOpenDrawer)}
      panCloseMask={0.3}
      panThreshold={0.3}
      openDrawerOffset={0.3}
      useInteractionManager
      content={
        <DrawerContent
          navigation={props.navigation}
          goToScreen={() => props.goToScreen()}
        />
      }
    >
      {props?.routes}
    </SideMenu>
  );
};

export default MenuItem;

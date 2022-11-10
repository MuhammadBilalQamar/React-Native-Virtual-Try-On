import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import SideMenu from "react-native-drawer";
import { DrawerContent } from "./drawerContent";

class MenuOverlay extends PureComponent {
  static propTypes = {
    goToScreen: PropTypes.func,
    routes: PropTypes.object,
    isOpenMenu: PropTypes.bool.isRequired,
  };

  toggleMenu = (isOpen) => {
    if (!isOpen) {
      //   this.props.drawerToggle({ isOpen: isOpen });
    }
  };

  render() {
    const { isOpenMenu } = this.props;

    return (
      <SideMenu
        ref={(_drawer) => (this.drawer = _drawer)}
        type="overlay"
        tapToClose
        open={isOpenMenu}
        onClose={() => this.toggleMenu(false)}
        panCloseMask={0.3}
        panThreshold={0.3}
        openDrawerOffset={0.3}
        useInteractionManager
        content={
          <DrawerContent
            // colorTextMenu={text}
            // backgroundMenu={background}
            goToScreen={this.props.goToScreen}
          />
        }
      >
        {this?.props?.routes}
      </SideMenu>
    );
  }
}

export default MenuOverlay;

import React from "react";
import styled, { css } from "styled-components";

import { QUERIES, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import VisuallyHidden from "../VisuallyHidden";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </DesktopNav>
        <MobileActions>
          <ShoppingBagButton>
            <Icon id="shopping-bag" />
            <VisuallyHidden>Open cart</VisuallyHidden>
          </ShoppingBagButton>
          <UnstyledButton>
            <Icon id="search" />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" />
            <VisuallyHidden>Open menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>
        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const NavLink = React.memo((props) => (
  <LinkWrapper>
    <NavLinkNormal {...props} />
    <NavLinkFancy {...props} />
  </LinkWrapper>
));

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media ${QUERIES.tabletAndSmaller} {
    justify-content: space-between;
    align-items: center;
    border-top: 4px solid var(--color-gray-900);
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MobileActions = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    gap: 32px;
    display: flex;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    flex: revert;
  }
`;

const ShoppingBagButton = styled(UnstyledButton)`
  transform: translateX(-2px);
`;

const Filler = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const LinkWrapper = styled.span`
  position: relative;
`;

// TODO: Add props to CSS so I don't have som uch repetition
// Who cares
const common = css`
  ${LinkWrapper}:first-of-type & {
    color: var(--color-secondary);
  }

  display: inline-block;
  transition:
    transform 200ms,
    opacity 200ms;

  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
`;

const NavLinkNormal = styled.a`
  ${common}
  font-weight: ${WEIGHTS.medium};

  transform: translateY(0);
  opacity: 1;

  ${LinkWrapper}:hover & {
    transform: translateY(-100%);
    opacity: 0;
  }
`;

const NavLinkFancy = styled.a`
  ${common}


  left: 0;
  position: absolute;
  font-weight: ${WEIGHTS.bold};

  transform: translateY(+100%);
  opacity: 0;


  ${LinkWrapper}:hover & {
    transform: translateY(0%);
    opacity: 1;
  }
`;

export default Header;

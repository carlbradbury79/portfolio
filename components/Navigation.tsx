'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
  z-index: 100;
  transition: all 0.3s ease;

  @media (prefers-color-scheme: dark) {
    background: rgba(10, 10, 10, 0.8);
  }
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
    height: 60px;
  }
`;

const Logo = styled(Link)`
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--foreground);
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }
`;

const DesktopNav = styled.div`
  display: flex;
  gap: 2.5rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)<{ $active: boolean }>`
  font-size: 0.95rem;
  font-weight: ${props => props.$active ? '500' : '400'};
  color: ${props => props.$active ? 'var(--foreground)' : 'var(--secondary)'};
  transition: color 0.2s ease;
  position: relative;

  &:hover {
    color: var(--foreground);
  }

  ${props => props.$active && `
    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      right: 0;
      height: 2px;
      background: var(--accent);
    }
  `}
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--foreground);
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: block;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

const MobileNav = styled.div<{ $isOpen: boolean }>`
  display: none;
  
  @media (max-width: 768px) {
    display: ${props => props.$isOpen ? 'block' : 'none'};
    border-top: 1px solid var(--border);
    padding: 1rem 2rem 1.5rem;
  }
`;

const MobileNavLink = styled(Link)<{ $active: boolean }>`
  display: block;
  padding: 0.75rem 0;
  font-size: 1.1rem;
  font-weight: ${props => props.$active ? '500' : '400'};
  color: ${props => props.$active ? 'var(--foreground)' : 'var(--secondary)'};
  transition: color 0.2s ease;

  &:hover {
    color: var(--foreground);
  }
`;

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/experience', label: 'Experience' },
  ];

  return (
    <Nav>
      <NavContainer>
        <Logo href="/">Carl Bradbury</Logo>

        <DesktopNav>
          {links.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              $active={pathname === link.href}
            >
              {link.label}
            </NavLink>
          ))}
        </DesktopNav>

        <MobileMenuButton
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </MobileMenuButton>
      </NavContainer>

      <MobileNav $isOpen={isMenuOpen}>
        {links.map((link) => (
          <MobileNavLink
            key={link.href}
            href={link.href}
            $active={pathname === link.href}
            onClick={() => setIsMenuOpen(false)}
          >
            {link.label}
          </MobileNavLink>
        ))}
      </MobileNav>
    </Nav>
  );
}

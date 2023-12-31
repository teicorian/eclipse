import React from 'react';
import { Page } from 'components';
import SidebarLink from '../../components/navigation/SidebarLink/SidebarLink';

const ComponentsSidebar = () => {
	return (
		<Page.Sidebar id={'components'}>
			<Page.SidebarSectionCollapse label='Brand'>
				<SidebarLink label='Logo' hover />
			</Page.SidebarSectionCollapse>
			<Page.SidebarSectionCollapse label='Data Entry'>
				<SidebarLink label='Input' hover />
			</Page.SidebarSectionCollapse>

			<Page.SidebarSection label='Feedback'></Page.SidebarSection>
			<Page.SidebarSection label='Form'></Page.SidebarSection>
			<Page.SidebarSectionCollapse label='General'>
				<SidebarLink label='Button' hover />
			</Page.SidebarSectionCollapse>
			<Page.SidebarSectionCollapse label='Identity'>
				<SidebarLink label='PFP' hover />
				<SidebarLink
					label='User'
					hover
					to='/components/identity/user'
				/>
			</Page.SidebarSectionCollapse>
			<Page.SidebarSectionCollapse label='Layout'>
				<SidebarLink
					label='Header'
					to='/components/layout/header'
					hover
				/>
				<SidebarLink label='Line' hover />
				<SidebarLink label='Page' hover />
				<SidebarLink label='Spacer' hover />
			</Page.SidebarSectionCollapse>
			<Page.SidebarSectionCollapse label='Navigation'>
				<SidebarLink label='MobileNavLink' hover />
				<SidebarLink label='NavLink' hover />
				<SidebarLink label='SidebarLink' hover />
			</Page.SidebarSectionCollapse>
			<Page.SidebarSection label='Other'></Page.SidebarSection>
			<Page.SidebarSectionCollapse label='Surfaces'>
				<SidebarLink label='Card' hover />
			</Page.SidebarSectionCollapse>
		</Page.Sidebar>
	);
};

export default ComponentsSidebar;

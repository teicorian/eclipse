import React from 'react';
import { Page, SidebarLink } from '../../components';

const ComponentsSidebar = () => {
	return (
		<Page.Sidebar id={'components'}>
			<Page.SidebarSectionCollapse label='Brand'>
				<SidebarLink label='Logo' hover />
			</Page.SidebarSectionCollapse>
			<Page.SidebarSectionCollapse label='Data Entry'>
				<SidebarLink
					label='Input'
					hover
					to='components/data_entry/input'
				/>
			</Page.SidebarSectionCollapse>

			<Page.SidebarSection label='Feedback'></Page.SidebarSection>
			<Page.SidebarSection label='Form'></Page.SidebarSection>
			<Page.SidebarSectionCollapse label='General'>
				<SidebarLink
					label='Button'
					hover
					to='components/general/button'
				/>
			</Page.SidebarSectionCollapse>
			<Page.SidebarSectionCollapse label='Identity'>
				<SidebarLink label='PFP' hover />
				<SidebarLink label='User' hover to='components/identity/user' />
			</Page.SidebarSectionCollapse>
			<Page.SidebarSectionCollapse label='Layout'>
				<SidebarLink
					label='Header'
					hover
					to='components/layout/header'
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

import { Button, Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import { setTabsList } from "@repo/store/dist/tabs";
import { RootState, useDispatch, useSelector } from "@/store";
// @ts-ignore
import { useTranslation } from "react-i18next";
import { HOME_URL } from "@/config/config";

const MoreButton = (props: any) => {
	const dispatch = useDispatch();
	const { tabsList } = useSelector((state: RootState) => state.tabs);
	const { delTabs } = props;
	const { t } = useTranslation();
	const { pathname } = useLocation();
	const navigate = useNavigate();

	// close multipleTab
	const closeMultipleTab = (tabPath?: string) => {
		const newTabsList = tabsList.filter((item: any) => {
			return item.path === tabPath || item.path === HOME_URL;
		});
		dispatch(setTabsList(newTabsList));
		tabPath ?? navigate(HOME_URL);
	};

	const menu: any = (
		<Menu
			items={[
				{
					key: "1",
					label: <span>{t("tabs.closeCurrent")}</span>,
					onClick: () => delTabs(pathname)
				},
				{
					key: "2",
					label: <span>{t("tabs.closeOther")}</span>,
					onClick: () => closeMultipleTab(pathname)
				},
				{
					key: "3",
					label: <span>{t("tabs.closeAll")}</span>,
					onClick: () => closeMultipleTab()
				}
			]}
		/>
	);
	return (
		<Dropdown menu={menu} placement="bottom" arrow={{ pointAtCenter: true }} trigger={["click"]}>
			<Button className="more-button" type="primary" size="small">
				{t("tabs.more")} <DownOutlined />
			</Button>
		</Dropdown>
	);
};
export default MoreButton;

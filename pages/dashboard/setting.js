import { Divider } from "@mui/material";
import { Box } from "@mui/system";
import DashboardLayout from "../../components/dashboard/layout/layout";
import ApiSetting from "../../components/dashboard/settingPage/apiSetting";
import UserSetting from "../../components/dashboard/settingPage/userSetting";

const Setting = () => {
  return (
    <DashboardLayout>
      <Box sx={{ margin: "1rem 4rem" }}>
        <UserSetting />

        <ApiSetting />
      </Box>
    </DashboardLayout>
  );
};

export default Setting;

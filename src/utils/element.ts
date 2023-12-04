import { ElMessage, ElMessageBox } from 'element-plus';

export function registerElTools() {
  window.$message = ElMessage;
  window.$alert = ElMessageBox.alert;
  window.$confirm = ElMessageBox.confirm;
}
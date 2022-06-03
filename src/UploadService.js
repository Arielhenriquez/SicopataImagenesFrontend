import http from "./http";
class UploadFilesService {
  upload(file) {
    return http.post("/Image/UploadImage", file, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
}
export default new UploadFilesService();

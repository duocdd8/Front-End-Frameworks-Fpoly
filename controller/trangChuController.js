window.trangChuController = function ($scope, $http) {
    $scope.title = "Đây là trang danh sách sinh viên"
    // Gán API vào 1 biến 

    const apiStudents = "http://localhost:3000/students"

    // Sử dụng $http để truy cập vào API
    $http.get(apiStudents)
        .then(function (response) {
            console.log(response);

            if (response.status == 200) {
                $scope.listStudent = response.data
            }
        })
    $scope.delete = function (id) {
        let confirm = window.confirm("Bạn muốn xóa");
        if (confirm) {
            $http.delete(`${apiStudents}/${id}`)
                .then(function (reponse) {
                    if (response) {
                        alert("Xoá thành công")
                    }
                })
                .cacth(function(error){
                    console.error(error);
                    alert("Lỗi")
                })
        }
    }
}
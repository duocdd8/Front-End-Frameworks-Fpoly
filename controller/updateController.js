window.updateController = function ($scope, $http, $location, $routeParams) {
    // $routeParams giúp lấy dữ liệu từ thanh
    $scope.title = "Form sửa sinh viên"

    const apiStudent = "http://localhost:3000/students"
    // gán id của sinh viên từ url vào 1 biến



    let idStudent = $routeParams.id;
    // console.log(idStudent)
    $http.get(`${apiStudent}/${idStudent}`)
        .then(function (response) {
            if (response.status == 200) {
                $scope.student = {
                    ten: response.data.ten,
                    tuoi: response.data.tuoi,
                    diaChi: response.data.diaChi,
                    gioiTinh: response.data.gioiTinh,
                }
            }
        })
    $scope.updateStudent = function () {
        let check = true;
        $scope.test = {
            testTen: false,
            testTuoi: false,
            testdiaChi: false,
            testgioiTinh: false
        }
        if (!$scope.student.ten) {
            check = false;
            $scope.test.testTen = true;
        }
        if (!$scope.student.tuoi) {
            check = false;
            $scope.test.testTuoi = true;
        }
        if (!$scope.student.diaChi) {
            check = false;
            $scope.test.testdiaChi = true;
        }
        if (!$scope.student.gioiTinh) {
            check = false;
            $scope.test.testgioiTinh = true;
        }
        if (check == true) {
            let newStudent = {
                ten: $scope.student.ten,
                tuoi: $scope.student.tuoi,
                diaChi: $scope.student.diaChi,
                gioiTinh: $scope.student.gioiTinh
            }
            // call Api để nhận dữ liệu thêm
            //console.log(newStudent);
            $http.put(`${apiStudent}/${idStudent}`, newStudent)
                .then(function (response) {
                    if (response) {
                        $location.path("Trang chủ rồi")
                    }
                })
        }else{
            alert('Vui lòng nhập đầy đủ thông tin')
        }

    }
}
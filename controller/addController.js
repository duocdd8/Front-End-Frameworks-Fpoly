window.addController = function ($scope, $http, $location) {
    $scope.title = "Form thêm thông tin sinh viên"
    $scope.addStudent = function () {
        const apiStudent = "http://localhost:3000/students"

        let check = true;
        $scope.test = {
            testTen: false,
            testTuoi: false,
            testdiaChi: false,
            testgioiTinh:false
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
            $http.post(apiStudent, newStudent)
                .then(function (response) {
                    if (response.status = 201) {
                        $location.path("Trang chủ rồi")
                    }
                })
        }else{
            alert('Vui lòng nhập đầy đủ thông tin')
        }

    }
}
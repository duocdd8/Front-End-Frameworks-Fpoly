window.detailController=function($scope, $http,$location,$routeParams){
    // $routeParams giúp lấy dữ liệu từ thanh
    $scope.title="chi tiết thông tin sinh viên"

    const apiStudent="http://localhost:3000/students"
    // gán id của sinh viên từ url vào 1 biến
    let idStudent=$routeParams.id;
    // console.log(idStudent)
    $http.get(`${apiStudent}/${idStudent}`)
    .then(function (response){
        if(response.status ==200){
            $scope.student ={
                ten:response.data.ten,
                tuoi:response.data.tuoi,
                diaChi:response.data.diaChi,
                gioiTinh:response.data.gioiTinh,
            }
        }
    })
}
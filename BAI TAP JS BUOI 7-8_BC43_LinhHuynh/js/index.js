var arrNum =  [12, 19, 20, 17, 41, 38, 45, -5, -12, 7];
//THÊM SỐ
document.getElementById('btnThemSo').onclick = function (){
    //input number: giá trị người dùng nhập
    var num = document.getElementById('themSo').value;
    //output: arrNum
    //process
    arrNum.push(num);
    document.getElementById('mang').innerHTML = '[' + arrNum + ']';
}
//1. TONG SO DUONG
document.getElementById('btnTongSoDuong').onclick = function(){
    //input: arrNum
    //output
    outPut =0;
    //process
    for(index =0; index < arrNum.length; index++){
      var  giaTri = Number(arrNum[index]);
        if(giaTri > 0){
            outPut += giaTri;
        }
    }
    document.getElementById('kqTongSoDuong').innerHTML = outPut;
}
//2.DEM SO DUONG
document.getElementById('btnDemSoDuong').onclick = function(){
    //input: arrNum
    //output
    outPut =0;
    //process
    for(index =0; index < arrNum.length; index++){
      var  giaTri = Number(arrNum[index]);
        if(giaTri > 0){
            outPut += 1;
        }
    }
    document.getElementById('kqDemSoDuong').innerHTML = outPut;
}

//3.TIM SO NHO NHAT
document.getElementById('btnTimSoNhoNhat').onclick = function(){
    //input: arrNum
    //output
    outPut =0;
    //process
    var outPut = Math.min(...arrNum)
         
    
    document.getElementById('kqTimSoNhoNhat').innerHTML = outPut;
}
//4.TIM SO DUONG NHO NHAT
document.getElementById('btnSoDuongNhoNhat').onclick = function(){
    //input: arrNum
    //output
    var outPut = arrNum[0];
    //process
    for(index =0; index < arrNum.length; index++){
        var giaTri = Number(arrNum[index]);
            if(giaTri - Number(arrNum[0])<0){
               if(giaTri >0){
                    outPut = giaTri
               }            
            }  
    }
    document.getElementById('kqSoDuongNhoNhat').innerHTML = outPut;
}
//5. SO CHAN CUOI CUNG
document.getElementById('btnSoChanCuoiCung').onclick = function(){
    //input: arrNum
    //output
    var outPut = 0;
    //process
    for(index =0; index < arrNum.length; index++){
        giaTri = Number(arrNum[index]);
        if(giaTri % 2 == 0){
            outPut = giaTri;
        }
    }
    document.getElementById('kqSoChanCuoiCung').innerHTML = outPut;
}
//6. DOI CHO
document.getElementById('btnDoiCho').onclick = function (){
    //input
    var viTri1 = document.getElementById('viTri1').value;//19
    var viTri2 = document.getElementById('viTri2').value;//20
    //ouput
    //process
    a = arrNum[viTri1];//19
   
   arrNum[viTri1] = arrNum[viTri2];
   arrNum[viTri2] = a;
  document.getElementById('kqDoiCho').innerHTML = arrNum;
}
// 7.SAP XEP TANG DAN
document.getElementById('btnSapXepTangDan').onclick = function (){

  document.getElementById('kqSapXepTangDan').innerHTML =arrNum.sort();

}
//8.TIM SO NGUYEN TỐ DAU TIEN
document.getElementById('btnSoNguyenToDauTien').onclick = function (){
    //input

    //output
    outPut = -1;
    //process
    for(index = 0; index < arrNum.length; index++){
        giaTri = Number(arrNum[index]);
        a = isPrime(giaTri)
        if(a == true){
            outPut = giaTri;
            break;
        }
    }
  document.getElementById('kqSoNguyenToDauTien').innerHTML = outPut;
}
//9. Đếm số NGUYÊN

//them so:
document.getElementById('btnThemSoVd9').onclick = function (){
    //input number: giá trị người dùng nhập
    var num = document.getElementById('themSoVd9').value;
    //output: arrNum
    //process
    arrNum.push(num);
    document.getElementById('kqThemSoVd9').innerHTML = '[' + arrNum + ']';
}
document.getElementById('btnDemSoNguyen').onclick = function(){
    //input
    //output
    outPut = 0;
    // process
    for(index = 0; index < arrNum.length; index++){
        giaTri = Number(arrNum[index]);
        a = Number.isInteger(giaTri);
        if(a = true){
            outPut ++
        }
    }
    document.getElementById('kqDemSoNguyen').innerHTML = outPut;
}
//10. SO SANH SO DUONG VA SO AM
document.getElementById('btnSoSanh').onclick = function(){
    //input: 

    //output
    outPut = '';
    //process
    // số lượng số dương
    outPutDuong = 0;
    // process
    for(index = 0; index < arrNum.length; index++){
        giaTri = Number(arrNum[index]);
        if(giaTri > 0){
            outPutDuong ++;
        }
    }
    // số lượng số âm
    outPutAm= 0;
    for(index = 0; index < arrNum.length; index++){
        giaTri = Number(arrNum[index]);
        if(giaTri < 0){
            outPutAm ++;
        }
    }
    // kết luận:
    if(Number(outPutDuong) - Number(outPutAm) > 0){
        document.getElementById('kqSosanh').innerHTML = 'số Dương > số Âm';
    }
    else if(Number(outPutDuong) - Number(outPutAm) == 0){
        document.getElementById('kqSosanh').innerHTML = 'số Dương = số Âm';
    }
    else{
        document.getElementById('kqSosanh').innerHTML = 'số Dương < số Âm';
    }
}
 
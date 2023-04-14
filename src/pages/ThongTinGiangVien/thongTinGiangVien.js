// eslint-disable-next-line no-unused-expressions
import React from 'react';

import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import logo_iuh from './../../images/logo_iuh.png';
import config from '../../configRoutes';
import Menu from '../../components/Menu/menu';
function ThongTinGiangVien() {
    // const cx = classNames.bind(style);
    const navigate = useNavigate();
    return (
        <>
            <div className="flex flex-row w-full h-max bg-gray-200 pt-3">
                <div className="w-1/12 h-full"></div>
                <div className="w-10/12 h-full flex flex-row">
                    <Menu />
                    <div className="w-5/6 h-screen bg-white  border rounded ml-2">
                        <div className="flex">
                            <div className="w-3/12 ml-5">
                                <div className="flex w-full h-full pt-5 pb-5 justify-center items-center">
                                    <div className="w-40 h-40 flex justify-center items-center rounded-full border border-sv-blue-4">
                                        <img src={logo_iuh} alt="qrcode" className={'h-40 w-40 rounded-full'} />
                                    </div>
                                </div>
                            </div>
                            <div className="w-9/12">
                                <h1 className="text-2xl text-sv-text-2 font-bold  border-b-2   h-10">
                                    Thông tin học vị
                                </h1>
                                <div className="w-full flex">
                                    <div className="w-1/2 mt-3">
                                        <div className="w-full ml-0 m-5 flex">
                                            <div className="w-1/2">
                                                <div className="flex flex-row text-sm">
                                                    <p className="mr-2 text-sv-text-1 ">MSGV:</p>
                                                    <p className="text-sv-text-2 font-bold"> 19496481</p>
                                                </div>

                                                <div className="flex flex-row text-sm mt-4 ">
                                                    <p className="mr-2  w-auto text-sv-text-1 ">Họ tên:</p>
                                                    <p className="text-sv-text-2 font-bold">Nguyễn Tuấn Thanh</p>
                                                </div>
                                                <div className="flex flex-row text-sm mt-4">
                                                    <p className="mr-2 text-sv-text-1 ">Giới tính:</p>
                                                    <p className="text-sv-text-2 font-bold">Nam</p>
                                                </div>
                                                <div className="flex text-sm mt-4">
                                                    <p className="mr-2 text-sv-text-1">Chức vụ:</p>
                                                    <p className="text-sv-text-2 font-bold">Giảng viên</p>
                                                </div>
                                            </div>
                                            <div className="w-1/2">
                                                <div className="flex text-sm">
                                                    <p className="mr-2 text-sv-text-1 ">Mã hồ sơ:</p>
                                                    <p className="text-sv-text-2 font-bold">19466481</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-1/2 mt-3 ">
                                        <div className="flex text-sm ml-0 m-5 ">
                                            <p className="mr-2 text-sv-text-1 ">Ngày vào trường:</p>
                                            <p className="text-sv-text-2 font-bold">19/08/2019</p>
                                        </div>
                                        <div className="flex text-sm ml-0 m-4 ">
                                            <p className="mr-2 text-sv-text-1 ">Học vị:</p>
                                            <p className="text-sv-text-2 font-bold">Tiến sĩ</p>
                                        </div>
                                        <div className="flex text-sm ml-0 m-4 ">
                                            <p className="mr-2 text-sv-text-1 ">Khoa:</p>
                                            <p className="text-sv-text-2 font-bold">Khoa công nghệ thông tin</p>
                                        </div>
                                        <div className="flex text-sm ml-0 m-4 ">
                                            <p className="mr-2 text-sv-text-1 ">Trạng thái:</p>
                                            <p className="text-sv-text-2 font-bold">Đang giảng dạy</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 ml-5 w-full">
                            <h1 className="text-2xl text-sv-text-2 font-bold  border-b-2   h-10">Thông tin cá nhân</h1>
                            <div className="w-full flex">
                                <div className="w-4/12">
                                    <div className="flex text-sm ml-0 m-5 ">
                                        <p className="mr-2 text-sv-text-1 ">Ngày sinh:</p>
                                        <p className="text-sv-text-2 font-bold">08/12/2001</p>
                                    </div>
                                    <div className="flex text-sm ml-0 m-5 ">
                                        <p className="mr-2 text-sv-text-1 ">Số CCCD:</p>
                                        <p className="text-sv-text-2 font-bold">123456789</p>
                                    </div>
                                    <div className="flex text-sm ml-0 m-5 ">
                                        <p className="mr-2 text-sv-text-1 ">Đối tượng:</p>
                                        <p className="text-sv-text-2 font-bold"></p>
                                    </div>
                                    <div className="flex text-sm ml-0 m-5">
                                        <p className="mr-2 text-sv-text-1 ">Ngày vào đoàn:</p>
                                        <p className="text-sv-text-2 font-bold"></p>
                                    </div>
                                    <div className="flex text-sm ml-0 m-5 ">
                                        <p className="mr-2 text-sv-text-1 ">Điện thoại:</p>
                                        <p className="text-sv-text-2 font-bold">0374779028</p>
                                    </div>
                                    <div className="flex text-sm ml-0 m-5 ">
                                        <p className="mr-2 text-sv-text-1 ">Địa chỉ liên hệ:</p>
                                        <p className="text-sv-text-2 font-bold"></p>
                                    </div>
                                    <div className="flex text-sm ml-0 m-5 ">
                                        <p className="mr-2 text-sv-text-1 ">Nơi sinh:</p>
                                        <p className="text-sv-text-2 font-bold">tỉnh Vĩnh Long</p>
                                    </div>
                                    <div className="flex text-sm ml-0 m-5 ">
                                        <p className="mr-2 text-sv-text-1 ">Hộ khẩu thường trú:</p>
                                        <p className="text-sv-text-2 font-bold">tỉnh Vĩnh Long</p>
                                    </div>
                                </div>
                                <div className="w-8/12">
                                    <div className="w-full flex">
                                        <div className="w-1/2">
                                            <div className="flex text-sm ml-0 m-5">
                                                <p className="mr-2 text-sv-text-1 ">Dân tộc:</p>
                                                <p className="text-sv-text-2 font-bold">Kinh</p>
                                            </div>
                                            <div className="flex text-sm ml-0 m-5">
                                                <p className="mr-2 text-sv-text-1 ">Ngày cấp:</p>
                                                <p className="text-sv-text-2 font-bold">01/11/2019</p>
                                            </div>
                                            <div className="flex text-sm ml-0 m-5">
                                                <p className="mr-2 text-sv-text-1 ">Diện chính sách:</p>
                                                <p className="text-sv-text-2 font-bold"></p>
                                            </div>
                                            <div className="flex text-sm ml-0 m-5">
                                                <p className="mr-2 text-sv-text-1 ">Ngày vào Đảng:</p>
                                                <p className="text-sv-text-2 font-bold"></p>
                                            </div>
                                            <div className="flex text-sm ml-0 m-5">
                                                <p className="mr-2 text-sv-text-1 ">Email:</p>
                                                <p className="text-sv-text-2 font-bold"></p>
                                            </div>
                                        </div>
                                        <div className="w-1/2">
                                            <div className="flex text-sm ml-0 m-5">
                                                <p className="mr-2 text-sv-text-1 ">Tôn giáo:</p>
                                                <p className="text-sv-text-2 font-bold">Không</p>
                                            </div>
                                            <div className="flex text-sm ml-0 m-5">
                                                <p className="mr-2 text-sv-text-1 ">Nơi cấp:</p>
                                                <p className="text-sv-text-2 font-bold">Tiền Giang</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
        </>
    );
}

export default ThongTinGiangVien;
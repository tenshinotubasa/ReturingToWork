
/*
    @brief 常量定义
*/
class Constant {
    static Personal_Info = 'Personal_Info';
    static Touch_Hist = 'Touch_Hist';
    static Back_Info = 'Back_Info';

    // 用户信息标签
    static PI_Name = "name";
    static PI_Depart = "department";
    static PI_Phone = "phone";
    static PI_Addr = "address";
    static PI_Pos = "position"

    // 接触史标签
    static TH_Touch = "touch";
    static TH_health = "health";
    static TH_Other = "other";

    // 返回情况
    static BI_Date = "date";
    static BI_Transport = "transport";
    static BI_Via_WH = "through_wuhan";
    static BI_Other = "other";
}
 
export default Constant;
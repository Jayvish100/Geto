import { combineReducers } from "redux";
import AuthReducer from './AuthReducer';
import UserReducer from './UserReducer';
import PledgeReducer from './PledgeReducer';
import RedeemVoucherReducer from './RedeemVoucherReducer';
import VoucherFormReducer from "./VoucherFormReducer";
import VouchersReducer from "./VouchersReducer";
import ProfileReducer from "./ProfileReducer";
import ProfileEditReducer from "./ProfileEditReducer";

export default combineReducers({
    auth: AuthReducer,
    userdata: UserReducer,
    pledges: PledgeReducer,
    redeemVouchers: RedeemVoucherReducer,
    vouchers: VouchersReducer,
    profile: ProfileReducer,
    profileEdit: ProfileEditReducer
});
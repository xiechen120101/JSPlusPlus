export default {
  setHeaderTitle(state, routerName) {
    switch (routerName) {
      case "day":
        state.headerTitle = "当天信息";
        break;
      case "month":
        state.headerTitle = "近期假期";
        break;
      case "year":
        state.headerTitle = "当年假期";
        break;
      default:
        state.headerTitle = "当天信息";
        break;
    }
  },
  setPlaceholder(state, routerName) {
    const date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;

    switch (routerName) {
      case "day":
        state.placeholder = `${year}${month}${day}（${year}年${month}月${day}日）`;
        break;
      case "month":
        state.placeholder = `${month}${day}（${month}月${day}日）`;
        break;
      case "year":
        state.placeholder = `${day}（${day}日）`;
        break;
      default:
        state.placeholder = `${year}${month}${day}（${year}年${month}月${day}日）`;
        break;
    }
  },
  setMaxLength(state, routerName) {
    switch (routerName) {
      case "day":
        state.maxlength = "8";
        break;
      case "month":
        state.maxlength = "6";
        break;
      case "year":
        state.maxlength = "4";
        break;
      default:
        state.maxlength = "8";
        break;
    }
  },
  setErrorCode(state, errorCode) {
    state.errorCode = errorCode;
  },
  setData(state, payload) {
    const { field, data } = payload;

    switch (field) {
      case "day":
        state.dayData = data;
        break;
      case "month":
        state.monthData = data;
        break;
      case "year":
        state.yearData = data;
        break;
      default:
        break;
    }
  },
  setField(state, field) {
    state.field = field;
  },
};

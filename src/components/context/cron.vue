<template>
  <div class="cron">
    <el-tabs v-model="activeName" @tab-click="tabchang" type="border-card">
      <el-tab-pane label="天" name="m">
        <el-radio-group v-model="curSelect">
          <el-radio label="mouth">月任务</el-radio>
          <el-radio label="week">周任务</el-radio>
          <el-radio label="day">天任务</el-radio>
        </el-radio-group>
        <div title="月" v-if="curSelect === 'mouth'">
          <h5>请选择日期</h5>
          <div class="imp mouthList">
            <input
              type="radio"
              name="mouthRadio"
              class="minList-check"
              value="1"
            />01
            <input
              type="radio"
              name="mouthRadio"
              class="minList-check"
              value="2"
            />02
            <input
              type="radio"
              name="mouthRadio"
              class="minList-check"
              value="3"
            />03
            <input
              type="radio"
              name="mouthRadio"
              class="minList-check"
              value="4"
            />04
            <input
              type="radio"
              name="mouthRadio"
              class="minList-check"
              value="5"
            />05
            <input
              type="radio"
              name="mouthRadio"
              class="minList-check"
              value="6"
            />06
            <input
              type="radio"
              name="mouthRadio"
              class="minList-check"
              value="7"
            />07
            <input
              type="radio"
              name="mouthRadio"
              class="minList-check"
              value="8"
            />08
          </div>
          <div class="imp mouthList">
            <input
              type="radio"
              name="mouthRadio"
              class="minList-check"
              value="9"
            />09
            <input
              type="radio"
              name="mouthRadio"
              class="minList-check"
              value="10"
            />10
            <input
              type="radio"
              name="mouthRadio"
              class="minList-check"
              value="11"
            />11
            <input
              type="radio"
              name="mouthRadio"
              class="minList-check"
              value="12"
            />12
            <input
              type="radio"
              name="mouthRadio"
              class="minList-check"
              value="13"
            />13
            <input
              type="radio"
              name="mouthRadio"
              class="minList-check"
              value="14"
            />14
            <input
              type="radio"
              name="mouthRadio"
              class="minList-check"
              value="15"
            />15
            <input
              type="radio"
              name="mouthRadio"
              class="minList-check"
              value="16"
            />16
          </div>
          <div class="imp mouthList">
            <input
              type="radio"
              name="mouthRadio"
              class="minList-check"
              value="17"
            />17
            <input
              type="radio"
              name="mouthRadio"
              class="minList-check"
              value="18"
            />18
            <input
              type="radio"
              name="mouthRadio"
              class="minList-check"
              value="19"
            />19
            <input
              type="radio"
              name="mouthRadio"
              class="minList-check"
              value="20"
            />20
            <input
              type="radio"
              name="mouthRadio"
              class="minList-check"
              value="21"
            />21
            <input
              type="radio"
              name="mouthRadio"
              class="minList-check"
              value="22"
            />22
            <input
              type="radio"
              name="mouthRadio"
              class="minList-check"
              value="23"
            />23
            <input
              type="radio"
              name="mouthRadio"
              class="minList-check"
              value="24"
            />24
          </div>
          <div class="imp mouthList">
            <input
              type="radio"
              name="mouthRadio"
              class="minList-check"
              value="25"
            />25
            <input
              type="radio"
              name="mouthRadio"
              class="minList-check"
              value="26"
            />26
            <input
              type="radio"
              name="mouthRadio"
              class="minList-check"
              value="27"
            />27
            <input
              type="radio"
              name="mouthRadio"
              class="minList-check"
              value="28"
            />28
            <input
              type="radio"
              name="mouthRadio"
              class="minList-check"
              value="29"
            />29
            <input
              type="radio"
              name="mouthRadio"
              class="minList-check"
              value="30"
            />30
            <input
              type="radio"
              name="mouthRadio"
              class="minList-check"
              value="31"
            />31
          </div>
        </div>
        <div title="周" v-if="curSelect === 'week'">
          <h5>请选择星期</h5>
          <div class="imp weekList">
            <input
              type="radio"
              name="weekRadio"
              value="1"
              class="minList-check"
            />周一
            <input
              type="radio"
              name="weekRadio"
              value="2"
              class="minList-check"
            />周二
            <input
              type="radio"
              name="weekRadio"
              value="3"
              class="minList-check"
            />周三
            <input
              type="radio"
              name="weekRadio"
              value="4"
              class="minList-check"
            />周四
            <input
              type="radio"
              name="weekRadio"
              value="5"
              class="minList-check"
            />周五
            <input
              type="radio"
              name="weekRadio"
              value="6"
              class="minList-check"
            />周六
            <input
              type="radio"
              name="weekRadio"
              value="7"
              class="minList-check"
            />周日
          </div>
        </div>
        <div title="分钟">
          <h5>请选择时间</h5>
          <div class="imp minList">
            <input
              type="radio"
              name="minRadio"
              value="6:0"
              class="minList-check"
            />06:00
            <input
              type="radio"
              name="minRadio"
              value="6:30"
              class="minList-check"
            />06:30
            <input
              type="radio"
              name="minRadio"
              value="7:0"
              class="minList-check"
            />07:00
            <input
              type="radio"
              name="minRadio"
              value="7:30"
              class="minList-check"
            />07:30
            <input
              type="radio"
              name="minRadio"
              value="8:0"
              class="minList-check"
            />08:00
            <input
              type="radio"
              name="minRadio"
              value="8:30"
              class="minList-check"
            />08:30
            <input
              type="radio"
              name="minRadio"
              value="9:0"
              class="minList-check"
            />09:00
            <input
              type="radio"
              name="minRadio"
              value="9:30"
              class="minList-check"
            />09:30
          </div>
          <div class="imp minList">
            <input
              type="radio"
              name="minRadio"
              value="10:0"
              class="minList-check"
            />10:00
            <input
              type="radio"
              name="minRadio"
              value="10:30"
              class="minList-check"
            />10:30
            <input
              type="radio"
              name="minRadio"
              value="11:0"
              class="minList-check"
            />11:00
            <input
              type="radio"
              name="minRadio"
              value="11:30"
              class="minList-check"
            />11:30
            <input
              type="radio"
              name="minRadio"
              value="12:0"
              class="minList-check"
            />12:00
            <input
              type="radio"
              name="minRadio"
              value="12:30"
              class="minList-check"
            />12:30
            <input
              type="radio"
              name="minRadio"
              value="13:0"
              class="minList-check"
            />13:00
            <input
              type="radio"
              name="minRadio"
              value="13:30"
              class="minList-check"
            />13:30
          </div>
          <div class="imp minList">
            <input
              type="radio"
              name="minRadio"
              value="14:0"
              class="minList-check"
            />14:00
            <input
              type="radio"
              name="minRadio"
              value="14:30"
              class="minList-check"
            />14:30
            <input
              type="radio"
              name="minRadio"
              value="15:0"
              class="minList-check"
            />15:00
            <input
              type="radio"
              name="minRadio"
              value="15:30"
              class="minList-check"
            />15:30
            <input
              type="radio"
              name="minRadio"
              value="16:0"
              class="minList-check"
            />16:00
            <input
              type="radio"
              name="minRadio"
              value="16:30"
              class="minList-check"
            />16:30
            <input
              type="radio"
              name="minRadio"
              value="17:0"
              class="minList-check"
            />17:00
            <input
              type="radio"
              name="minRadio"
              value="17:30"
              class="minList-check"
            />17:30
          </div>
          <div class="imp minList">
            <input
              type="radio"
              name="minRadio"
              value="18:0"
              class="minList-check"
            />18:00
            <input
              type="radio"
              name="minRadio"
              value="18:30"
              class="minList-check"
            />18:30
            <input
              type="radio"
              name="minRadio"
              value="19:0"
              class="minList-check"
            />19:00
            <input
              type="radio"
              name="minRadio"
              value="19:30"
              class="minList-check"
            />19:30
            <input
              type="radio"
              name="minRadio"
              value="20:0"
              class="minList-check"
            />20:00
            <input
              type="radio"
              name="minRadio"
              value="20:30"
              class="minList-check"
            />20:30
            <input
              type="radio"
              name="minRadio"
              value="21:0"
              class="minList-check"
            />21:00
            <input
              type="radio"
              name="minRadio"
              value="21:30"
              class="minList-check"
            />21:30
          </div>
          <div class="imp minList">
            <input
              type="radio"
              name="minRadio"
              value="22:0"
              class="minList-check"
            />22:00
            <input
              type="radio"
              name="minRadio"
              value="22:30"
              class="minList-check"
            />22:30
            <input
              type="radio"
              name="minRadio"
              value="23:0"
              class="minList-check"
            />23:00
            <input
              type="radio"
              name="minRadio"
              value="23:30"
              class="minList-check"
            />23:30
            <input
              type="radio"
              name="minRadio"
              value="0:0"
              class="minList-check"
            />00:00
            <input
              type="radio"
              name="minRadio"
              value="0:30"
              class="minList-check"
            />00:30
            <input
              type="radio"
              name="minRadio"
              value="1:0"
              class="minList-check"
            />01:00
            <input
              type="radio"
              name="minRadio"
              value="1:30"
              class="minList-check"
            />01:30
          </div>
          <div class="imp minList">
            <input
              type="radio"
              name="minRadio"
              value="2:0"
              class="minList-check"
            />02:00
            <input
              type="radio"
              name="minRadio"
              value="2:30"
              class="minList-check"
            />02:30
            <input
              type="radio"
              name="minRadio"
              value="3:0"
              class="minList-check"
            />03:00
            <input
              type="radio"
              name="minRadio"
              value="3:30"
              class="minList-check"
            />03:30
            <input
              type="radio"
              name="minRadio"
              value="4:0"
              class="minList-check"
            />04:00
            <input
              type="radio"
              name="minRadio"
              value="04:30"
              class="minList-check"
            />04:30
            <input
              type="radio"
              name="minRadio"
              value="5:0"
              class="minList-check"
            />05:00
            <input
              type="radio"
              name="minRadio"
              value="5:30"
              class="minList-check"
            />05:30
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
    <fieldset class="fieldset">
      <table>
        <tbody>
          <tr>
            <td class="tdtitle">表达式字段：</td>
            <td>
              <input
                type="text"
                disabled
                name="v_second"
                class="col"
                value="*"
                readonly="readonly"
              />
              <span>秒</span>
            </td>
            <td>
              <input
                type="text"
                disabled
                name="v_min"
                class="col"
                value="*"
                readonly="readonly"
              />
              <span>分钟</span>
            </td>
            <td>
              <input
                type="text"
                disabled
                name="v_hour"
                class="col"
                value="*"
                readonly="readonly"
              />
              <span>小时</span>
            </td>
            <td>
              <input
                type="text"
                disabled
                name="v_day"
                class="col"
                value="*"
                readonly="readonly"
              />
              <span>日</span>
            </td>
            <td>
              <input
                type="text"
                disabled
                name="v_mouth"
                class="col"
                value="*"
                readonly="readonly"
              />
              <span>月</span>
            </td>
            <td>
              <input
                type="text"
                disabled
                name="v_week"
                class="col"
                value="?"
                readonly="readonly"
              />
              <span>周</span>
            </td>
            <td>
              <input
                type="text"
                disabled
                name="v_year"
                class="col"
                readonly="readonly"
              /><span>年</span>
            </td>
          </tr>
          <tr>
            <td class="tdtitle">Cron 表达式：</td>
            <td colspan="6" style="width: 900px" class="colspanbtn">
              <input
                type="text"
                name="cron"
                style="width: 100%"
                value="* * * * * ?"
                id="cron"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </fieldset>
  </div>
</template>
<script>
import $ from "jquery";
// import { getCron } from "../../api/api";

export default {
  data() {
    return {
      activeName: "s",
      currentIndex: 0,
      dialogFormVisible: true,
      cronList: [],
      cronVal: "",
      curSelect: "day",
    };
  },
  created() {
    // this.activeName = "s";
    // this.currentIndex = 0;
    // this.$nextTick(() => {
    //   if (sessionStorage.getItem("cronVal")) {
    //     $("#cron").val(sessionStorage.getItem("cronVal"));
    //   }
    //   this.btnFan();
    //   this.initdata();
    // });
  },
  watch: {
    curSelect(cur, pre) {
      this.initdata();
    },
  },
  methods: {
    // async onGetCron() {
    //   this.cronList = [];
    //   const txt = $("#cron").val();
    //   const { data } = await getCron({
    //     CronExpression: txt,
    //   });
    //   console.log(data);
    //   this.cronList = data.data.data;
    //   sessionStorage.setItem("nextExecuteDate", data.data.data[0]);
    // },
    ongetcron() {
      const txt = $("#cron").val();
      this.$emit("updata", txt);
    },
    initdata() {
      $(() => {
        // const vals = $("input[name^='v_']");
        const csvals = $("input[name^='v_']");
        const cron = $("#cron");
        csvals.change(() => {
          const item = [];
          // eslint-disable-next-line func-names
          csvals.each(function () {
            item.push(this.value);
          });
          // 当前选中项之前的如果为*，则都设置成0
          // eslint-disable-next-line no-plusplus
          for (let i = this.currentIndex; i >= 1; i--) {
            if (item[i] !== "*" && item[i - 1] === "*") {
              item[i - 1] = "0";
            }
          }
          // // 当前选中项之后的如果不为*则都设置成*
          if (item[this.currentIndex] === "*") {
            // eslint-disable-next-line no-plusplus
            for (let i = this.currentIndex + 1; i < item.length; i++) {
              if (i === 5) {
                item[i] = "?";
              } else {
                item[i] = "*";
              }
            }
          }
          cron.val(item.join(" ")).change();
        });
        cron.change(() => {
          this.btnFan();
        });
        $(".numberspinner").on("blur", (e) => {
          $(e.currentTarget).parent().children().eq(0).click();
        });
        const minList = $(".minList").children();
        // eslint-disable-next-line func-names

        minList.change(() => {
          let vals = [];
          // eslint-disable-next-line func-names
          minList.each(function () {
            if (this.checked) {
              vals = [this.value.split(":")[1]];
            }
          });
          let val = "?";
          if (vals.length > 0 && vals.length < 59) {
            val = vals.join(",");
          } else if (vals.length === 59) {
            val = "*";
          }
          const item = $("input[name=v_min]");
          item.val(val);
          item.change();
        });

        const hourList = $(".minList").children();
        // eslint-disable-next-line func-names
        hourList.change(() => {
          let vals = [];
          // eslint-disable-next-line func-names
          hourList.each(function () {
            if (this.checked) {
              console.log(this.value.split(":")[0]);
              vals = [this.value.split(":")[0]];
            }
          });
          let val = "?";
          if (vals.length > 0 && vals.length < 24) {
            val = vals.join(",");
          } else if (vals.length === 24) {
            val = "*";
          }
          const item = $("input[name=v_hour]");
          item.val(val);
          item.change();
        });

        const mouthList = $(".mouthList").children();
        // eslint-disable-next-line func-names
        $("#mouth_appoint").click(function () {
          if (this.checked) {
            if ($(mouthList).filter(":checked").length === 0) {
              $(mouthList.eq(0)).attr("checked", true);
            }
            mouthList.eq(0).change();
          }
        });

        mouthList.change(() => {
          let vals = [];
          mouthList.each(function () {
            if (this.checked) {
              vals.push(this.value);
            }
          });
          let val = "?";
          if (vals.length > 0 && vals.length < 12) {
            val = vals.join(",");
          } else if (vals.length === 12) {
            val = "*";
          }
          const item = $("input[name=v_mouth]");
          item.val(val);
          item.change();
        });

        const weekList = $(".weekList").children();
        // eslint-disable-next-line func-names
        console.log($(".weekList"));
        weekList.change(() => {
          let vals = [];
          console.log("----");
          // eslint-disable-next-line func-names
          weekList.each(function () {
            if (this.checked) {
              vals = [this.value];
            }
          });
          let val = "?";
          if (vals.length > 0 && vals.length < 7) {
            val = vals.join(",");
          } else if (vals.length === 7) {
            val = "*";
          }
          const item = $("input[name=v_week]");
          item.val(val);
          item.change();
        });
      });
    },
    btnFan() {
      // 获取参数中表达式的值
      // let txt = ''
      // const cronval = sessionStorage.getItem('cronVal')
      // console.log(cronval)
      // if (cronval) {
      //   txt = cronval;
      // } else {
      //   txt = $('#cron').val();
      // }
      const txt = $("#cron").val();
      this.cronVal = txt;
      console.log(txt);
      sessionStorage.setItem("cronVal", txt);
      if (txt) {
        const regs = txt.split(" ");
        $("input[name=v_second]").val(regs[0]);
        $("input[name=v_min]").val(regs[1]);
        $("input[name=v_hour]").val(regs[2]);
        $("input[name=v_day]").val(regs[3]);
        $("input[name=v_mouth]").val(regs[4]);
        $("input[name=v_week]").val(regs[5]);
        console.log(regs[0]);
        this.initObj(regs[0], "second");
        this.initObj(regs[1], "min");
        this.initObj(regs[2], "hour");
        this.initDay(regs[3]);
        this.initMonth(regs[4]);
        this.initWeek(regs[5]);

        if (regs.length > 6) {
          $("input[name=v_year]").val(regs[6]);
          this.initYear(regs[6]);
        }
      }
    },
    initObj(strVal, strid) {
      let ary = null;
      const objRadio = $(`input[name='${strid}'`);
      if (strVal === "*") {
        objRadio.eq(0).attr("checked", "checked");
      } else if (strVal.split("-").length > 1) {
        ary = strVal.split("-");
        objRadio.eq(1).attr("checked", "checked");

        $(`#${strid}Start_0`).val(ary[0])("setValue", ary[0]);
        $(`#${strid}End_0`).val(ary[1]);
      } else if (strVal.split("/").length > 1) {
        ary = strVal.split("/");
        objRadio.eq(2).attr("checked", "checked");
        $(`#${strid}Start_1`).val(ary[0]);
        $(`#${strid}End_1`).val(ary[1]);
      } else {
        objRadio.eq(3).attr("checked", "checked");
        if (strVal !== "?") {
          ary = strVal.split(",");
          // eslint-disable-next-line no-plusplus
          for (let i = 0; i < ary.length; i++) {
            $(`.${strid}List input[value='${ary[i]}']`).attr(
              "checked",
              "checked"
            );
          }
        }
      }
    },
    initDay(strVal) {
      let ary = null;
      const objRadio = $("input[name='day'");
      if (strVal === "*") {
        objRadio.eq(0).attr("checked", "checked");
      } else if (strVal === "?") {
        objRadio.eq(1).attr("checked", "checked");
      } else if (strVal.split("-").length > 1) {
        ary = strVal.split("-");
        objRadio.eq(2).attr("checked", "checked");
        $("#dayStart_0").val(ary[0]);
        $("#dayEnd_0").val(ary[1]);
      } else if (strVal.split("/").length > 1) {
        ary = strVal.split("/");
        objRadio.eq(3).attr("checked", "checked");
        $("#dayStart_1").val(ary[0]);
        $("#dayEnd_1").val(ary[1]);
      } else if (strVal.split("W").length > 1) {
        ary = strVal.split("W");
        objRadio.eq(4).attr("checked", "checked");
        $("#dayStart_2").val(ary[0]);
      } else if (strVal === "L") {
        objRadio.eq(5).attr("checked", "checked");
      } else {
        objRadio.eq(6).attr("checked", "checked");
        ary = strVal.split(",");
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < ary.length; i++) {
          $(`.dayList input[value='${ary[i]}']`).attr("checked", "checked");
        }
      }
    },
    initMonth(strVal) {
      let ary = null;
      const objRadio = $("input[name='mouth'");
      if (strVal === "*") {
        objRadio.eq(0).attr("checked", "checked");
      } else if (strVal === "?") {
        objRadio.eq(1).attr("checked", "checked");
      } else if (strVal.split("-").length > 1) {
        ary = strVal.split("-");
        objRadio.eq(2).attr("checked", "checked");
        $("#mouthStart_0").val(ary[0]);
        $("#mouthEnd_0").val(ary[1]);
      } else if (strVal.split("/").length > 1) {
        ary = strVal.split("/");
        objRadio.eq(3).attr("checked", "checked");
        $("#mouthStart_1").val(ary[0]);
        $("#mouthEnd_1").val(ary[1]);
      } else {
        objRadio.eq(4).attr("checked", "checked");

        ary = strVal.split(",");
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < ary.length; i++) {
          $(`.mouthList input[value='${ary[i]}']`).attr("checked", "checked");
        }
      }
    },
    initWeek(strVal) {
      let ary = null;
      const objRadio = $("input[name='week'");
      if (strVal === "*") {
        objRadio.eq(0).attr("checked", "checked");
      } else if (strVal === "?") {
        objRadio.eq(1).attr("checked", "checked");
      } else if (strVal.split("/").length > 1) {
        ary = strVal.split("/");
        objRadio.eq(2).attr("checked", "checked");
        $("#weekStart_0").val(ary[0]);
        $("#weekEnd_0").val(ary[1]);
      } else if (strVal.split("-").length > 1) {
        ary = strVal.split("-");
        objRadio.eq(3).attr("checked", "checked");
        $("#weekStart_1").val(ary[0]);
        $("#weekEnd_1").val(ary[1]);
      } else if (strVal.split("L").length > 1) {
        ary = strVal.split("L");
        objRadio.eq(4).attr("checked", "checked");
        $("#weekStart_2").val(ary[0]);
      } else {
        objRadio.eq(5).attr("checked", "checked");
        ary = strVal.split(",");
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < ary.length; i++) {
          $(`.weekList input[value='${ary[i]}']`).attr("checked", "checked");
        }
      }
    },
    initYear(strVal) {
      let ary = null;
      const objRadio = $("input[name='year'");
      if (strVal === "*") {
        objRadio.eq(1).attr("checked", "checked");
      } else if (strVal.split("-").length > 1) {
        ary = strVal.split("-");
        objRadio.eq(2).attr("checked", "checked");
        $("#yearStart_0").val(ary[0]);
        $("#yearEnd_0").val(ary[1]);
      }
    },
    tabchang(val) {
      console.log(val.index);
      this.currentIndex = val.index;
    },
    /**
     * 每周期
     */
    everyTime(dom) {
      const item = $(`input[name=v_${dom.target.name}]`);
      item.val("*");
      item.change();
    },

    /**
     * 不指定
     */
    unAppoint(dom) {
      const { name } = dom.target;
      let val = "?";
      if (name === "year") {
        val = "";
      }
      const item = $(`input[name=v_${name}]`);
      item.val(val);
      item.change();
    },

    // appoint(dom) {

    // },

    /**
     * 周期
     */
    cycle(dom) {
      console.log(dom.target);
      const { name } = dom.target;
      console.log($(dom.target).parent().find(".numberspinner").eq(0));
      const ns = $(dom.target).parent().find(".numberspinner");
      const start = ns.eq(0).val();
      const end = ns.eq(1).val();
      const item = $(`input[name=v_${name}]`);
      item.val(`${start}-${end}`);
      item.change();
    },

    /**
     * 从开始
     */
    startOn(dom) {
      const { name } = dom.target;
      const ns = $(dom.target).parent().find(".numberspinner");
      const start = ns.eq(0).val();
      const end = ns.eq(1).val();
      const item = $(`input[name=v_${name}]`);
      item.val(`${start}/${end}`);
      item.change();
    },

    lastDay(dom) {
      const item = $(`input[name=v_${dom.target.name}]`);
      item.val("L");
      item.change();
    },

    weekOfDay(dom) {
      const { name } = dom.target;
      const ns = $(dom.target).parent().find(".numberspinner");
      const start = ns.eq(0).val();
      const end = ns.eq(1).val();
      const item = $(`input[name=v_${name}]`);
      item.val(`${start}#${end}`);
      item.change();
    },

    lastWeek(dom) {
      const item = $(`input[name=v_${dom.target.name}]`);
      const ns = $(dom.target).parent().find(".numberspinner");
      const start = ns.eq(0).val();
      item.val(`${start}L`);
      item.change();
    },

    workDay(dom) {
      const { name } = dom.target;
      const ns = $(dom.target).parent().find(".numberspinner");
      const start = ns.eq(0).val();
      const item = $(`input[name=v_${name}]`);
      item.val(`${start}W`);
      item.change();
    },
  },
};
</script>
<style lang="css" scoped>
.cron {
  width: 1090px;
  max-height: 600px;
  opacity: 1;
  background: #ffffff;
  border: 1px solid #cacbcd;
  border-radius: 5px;
}
/* .col {
  width: 108px;
  margin-right: 5px;
} */
.line {
  margin: 10px 0;
}
.imp input {
  margin-left: 20px;
}
.hourList {
  padding-left: 20px;
}
/* .el-tabs__header {
  height: 40px;
  opacity: 1;
  background: #f0f1f1;
  border-radius: 4px;
  box-shadow: 0px -1px 0px 0px #cacbcd inset;
} */
</style>
<style scoped>
/deep/.el-tabs__header .el-tabs__item {
  line-height: 40px;
}

.el-tabs--border-card {
  box-shadow: none;
  border: none;
  border-radius: 5px;
}
.fieldset {
  border: 1px solid #cacbcd;
  border-left: none;
  border-right: none;
  padding: 10px 30px;
}
.legend {
  font-size: 12px;
  margin: 0 10px;
}
tr {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

td {
  display: inline-block;
  height: 30px;
  line-height: 30px;
  width: 120px;
  background: #ffffff;
  margin-right: 10px;
  position: relative;
}
/* // border-radius: 3px;
  // box-shadow: 0px 1px 1px 0px rgba(16, 22, 26, 0.2) inset,
  //   0px 0px 0px 1px rgba(16, 22, 26, 0.15) inset; */
input {
  height: 30px;
  width: 120px;
  padding-left: 10px;
  padding-right: 40px;
  margin: 0;
  box-sizing: border-box;
  border: 1px solid #cacbcd;
}
span {
  position: absolute;
  border-left: 1px solid rgba(118, 118, 118, 0.3);
  color: #5c7080;
  font-size: 12px;
  width: 40px;
  right: 0px;
  text-align: center;
}
.tdtitle {
  font-size: 14px;
  width: 100px;
}
.colspanbtn {
  display: flex;
}
.sx-button-states {
  flex-shrink: 0;
}
.runTitle {
  height: 30px;
  line-height: 30px;
  padding-left: 30px;
  background: #f7f8f8;
  box-shadow: 0px -1px 0px 0px #cacbcd inset;
}
.dataList {
  height: 110px;
  overflow: hidden;
  overflow-y: scroll;
  padding: 10px 20px;
  color: #5c7080;
  line-height: 20px;
  font-size: 14px;
}
input[type="text"]:focus {
  border: 1px solid #cacbcd;
  outline: none;
}

.minList-check {
  width: 15px;
  vertical-align: middle;
  margin-right: 5px;
}
h5 {
  margin: 10px 0;
}
</style>

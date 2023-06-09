<template>
  <el-card>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>年度协议管理</el-breadcrumb-item>
      <el-breadcrumb-item>二级商协议</el-breadcrumb-item>
      <el-breadcrumb-item>新增二级商协议</el-breadcrumb-item>
    </el-breadcrumb>
    <div>
      <h1>新增二级商协议</h1>
    </div>
  </el-card>

  <a-divider dashed="true">
    <span class="xuhao">1</span><span class="cont">协议主体</span>
  </a-divider>
  <a-card class="card">
    <div class="form">
      <div>
        <el-form>
          <el-form-item label="协议客户 :">
            <el-button class="btn">选择客户</el-button>
            <el-label style="margin-left: 10px">上海正也医药有限公司</el-label>
          </el-form-item>
          <el-form-item label="购进指标 :">
            <el-select
              v-model="value"
              class="m-2"
              placeholder="金额"
              size="default"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
            <el-input
              style="margin-left: 10px"
              placeholder="输入金额/数量"
            ></el-input>
          </el-form-item>

          <el-form-item label="销售区域 :">
            <el-button class="btn">选择区域</el-button>
            <el-select
              v-model="value1"
              multiple
              placeholder="全国"
              style="width: 100px; margin-left: 10px"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <div class="right">
        <el-form>
          <el-form-item label="协议状态 :">
            <el-select
              v-model="value1"
              multiple
              placeholder="正常"
              style="width: 100px"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="纯销指标 :">
            <el-select
              v-model="value"
              class="m-2"
              placeholder="金额"
              size="default"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
            <el-input
              style="margin-left: 10px"
              placeholder="输入金额/数量"
            ></el-input>
          </el-form-item>
          <el-label>签订时间 :</el-label>
          <el-date-picker
            v-model="qddate"
            type="date"
            placeholder="Pick a day"
            :size="size"
            style="margin-left: 10px; width: 210px"
          />
        </el-form>
      </div>
    </div>
    <div>
      <el-form-item label="购进指标 :">
        <el-select
          v-model="value"
          class="m-2"
          placeholder="指定渠道"
          size="default"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <el-button style="margin-left: 10px">请选择渠道</el-button>
      </el-form-item>
    </div>
    <div class="list">
      <div
        style="
          display: flex;
          justify-content: flex-start;

          height: 40px;
          background-color: #f5f5f5;
          line-height: 40px;
        "
      >
        <div class="item">指定渠道编码</div>
        <div class="item">指定渠道名称</div>
        <div class="item">所在省</div>
      </div>
      <div
        style="
          display: flex;
          justify-content: space-around;
          text-align: left;
          border-bottom: 2px solid #e5e5e5;
        "
        v-for="item in list"
      >
        <div class="item">{{ item.code }}</div>
        <div class="item">{{ item.name }}</div>
        <div class="item">{{ item.provice }}</div>
      </div>
    </div>
  </a-card>

  <a-divider dashed="true">
    <span class="xuhao">2</span><span class="cont">产品政策</span>
  </a-divider>
  <div>
    <div class="mid">
      <el-button type="primary">添加产品</el-button>
      <span class="sj sj-a">购进总指标(万元) :</span><span>￥152.65</span>
      <span class="sj sj-a">指标按季度分解(万元) :</span>
      <span class="sj sj-b"
        >【Q1】￥12.5,【Q2】￥12.5,【Q3】￥12.5,【Q4】￥12.5,</span
      >
      <span class="sj sj-a">纯销总指标(万元) :</span><span>￥152.65</span>
    </div>
    <div>
      <el-card class="card card-a">
        <div style="display: flex">
          <div>
            <el-form-item>
              <el-label>产品 : </el-label>
              <el-button class="sj">选择产品</el-button>
              <el-label class="sj" style="color: #659cff"
                >美复胶丸,24粒/盒</el-label
              >
            </el-form-item>
          </div>

          <div>
            <el-label class="sj">协议有效期 :</el-label>
            <el-date-picker
              v-model="value2"
              type="daterange"
              start-placeholder=""
              end-placeholder=""
              :default-value="[new Date(2010, 9, 1), new Date(2010, 10, 1)]"
            />
          </div>
        </div>
      </el-card>

      <el-card class="card">
        <div style="display: flex">
          <div style="width: 14%" v-for="item in priceList">
            <div class="bg">{{ item.name }}</div>
            <div style="margin-top: 5px" v-if="item.name">
              <el-input placeholder="请输入"></el-input>
            </div>
          </div>
        </div>
      </el-card>

      <el-card class="card card-b">
        <div style="display: flex">
          <div style="width: 14%" v-for="item in priceList">
            <div class="bg">
              {{ item.text }}
            </div>
            <div style="margin-top: 5px">
              <div v-if="item.type === 0">
                <el-input placeholder="请输入"></el-input>
              </div>
              <div v-if="item.type === 3">
                <el-select
                  v-model="value1"
                  class="m-2"
                  placeholder="单选项1"
                  size="default"
                >
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </div>
              <div v-if="item.type === 2">
                <el-select v-model="value1" multiple placeholder="多选项1">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </div>
              <div v-if="item.type === 1">
                <el-date-picker
                  v-model="qddate"
                  type="date"
                  placeholder="Pick a day"
                  :size="size"
                />
              </div>
            </div>
          </div>
        </div>
      </el-card>
    </div>
  </div>

  <a-divider dashed="true">
    <span class="xuhao">3</span><span class="cont">补充协议</span>
  </a-divider>
  <div class="card-c" style="display: flex; justify-content: space-between">
    <div style="display: flex">
      <div
        :class="{ active: currentTab === index }"
        @click="handlerTab(index)"
        style="
          width: 100px;
          height: 30px;
          line-height: 30px;
          border-top: 1px solid #e5e5e5;
          border-right: 1px solid #e5e5e5;
          text-align: center;
        "
        v-for="(item, index) in xiyiList"
      >
        {{ item.name }}
      </div>
    </div>

    <div>
      <el-button type="primary">新增</el-button>
    </div>
  </div>
  <a-card class="card">
    <div style="display: flex; justify-content: space-between">
      <div>协议内容:</div>
      <div>
        <el-button type="danger" plain>删除</el-button>
      </div>
    </div>
    <div v-for="(item, index) in content">
      <el-input
        v-if="currentTab === index"
        v-model="content[index]"
        :rows="5"
        type="textarea"
      />
    </div>
  </a-card>
  <el-card class="card-d"><el-button type="primary">保存</el-button></el-card>
</template>
<script setup>
import { StarFilled } from "@element-plus/icons-vue";

import { reactive, ref, onMounted } from "vue";
const handlerTab = (val) => {
  console.log(val);
  currentTab.value = val;
};
const value1 = ref([]);
const content = ref(["1", "2", "3"]);
const value2 = ref([]);
const qddate = ref("");
const currentTab = ref(0);
const xiyiList = reactive([
  {
    id: 0,
    name: "补充协议1",
  },
  {
    id: 1,
    name: "补充协议2",
  },
  {
    id: 2,
    name: "补充协议3",
  },
]);
const priceList = reactive([
  {
    name: "协议价(元)",
    text: "分销奖励",
    type: 0,
  },
  {
    name: "票折(元)",
    text: "费用科目",
    type: 3,
  },
  {
    name: "购进指标量(大单位)",
    text: "零售配送",
    type: 2,
  },
  {
    name: "购进指标量(小单位)",
    text: "医疗配送商",
    type: 0,
  },
  {
    name: "购进金额(万元)",
    text: "费用科目",
    type: 2,
  },
  {
    name: "纯销指标量(小单位)",
    text: "自定义7",
    type: 1,
  },
  {
    name: "纯销指标金额(万元)",
    text: "自定义7",
    type: 1,
  },
]);
const list = reactive([
  {
    code: "BJ00090",
    name: "宁波九州通药业有限公司",
    provice: "浙江省",
  },
  {
    code: "BJ00343",
    name: "国药控股精华有限公司",
    provice: "浙江省",
  },
  {
    code: "BJ00908",
    name: "老百姓药业有限公司",
    provice: "浙江省",
  },
]);
const options = reactive([
  {
    value: "全国",
    label: "全国",
  },
  {
    value: "全国",
    label: "全国",
  },
]);
</script>
<style scoped>
.active {
  color: #1890ff;
}
.el-breadcrumb {
  background-color: #fff;
}
.form {
  display: flex;
}
.form .right {
  margin-left: 35%;
}
.mid {
  width: 98%;
  margin: 0 auto;
  padding-bottom: 10px;
}
.sj {
  margin-left: 10px;
}
.sj-b {
  font-weight: bold;
}
.sj-a {
  color: #939393;
}
.btn2 {
  display: flex;
  justify-content: end;
}
.foot {
}
.list {
  margin-left: 80px;
  justify-content: flex-start;
}
.item {
  width: 33%;
  margin-left: 50px;
}
.m-2 {
  width: 100px;
}
.btn {
  width: 100px;
}
.el-input {
  width: 200px;
  background-color: #f5f5f5;
}
.el-card {
  height: 100px;
}
.card-c {
  width: 98%;
  margin: 0 auto;

  background-color: #fff;
}
.card-d {
  margin-top: 10px;
}

.el-drawer {
  outline: none;
  border: none;
}
.xuhao {
  display: inline-block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #508dff;
  color: #fff;
  line-height: 15px;
}
.cont {
  margin-left: 10px;
}
.card {
  width: 98%;
  margin: 0 auto;
}
.card-a {
  height: 60px;
}
.card-b {
  margin-top: 10px;
}
.bg {
  background-color: #f5f5f5;
  padding: 8px 8px;
}
.a-divider {
  display: flex;
  width: 200px;
}
</style>


FROM ubuntu:18.04

LABEL author="brick9527<brick9527@foxmail.com>"
LABEL name="practice_ui_base"
LABEL version="0.1.0"

ENV DEBIAN_FRONTEND="noninteractive"

USER root
WORKDIR /practice-ui

RUN sed -i s@/archive.ubuntu.com/@/mirrors.aliyun.com/@g /etc/apt/sources.list
RUN apt update
RUN apt upgrade

# 安装tzdata
RUN apt-get update \
&& apt-get install -y apt-utils tzdata \
&& cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
&& dpkg-reconfigure -f noninteractive tzdata \
&& date "+%Y-%m-%d %H:%M:%S"

# 安装node
RUN apt install -y wget
RUN wget https://cdn.npm.taobao.org/dist/node/v14.17.4/node-v14.17.4-linux-x64.tar.gz -P .; \
  tar -zxvf node-v14.17.4-linux-x64.tar.gz; \
  rm node-v14.17.4-linux-x64.tar.gz
ENV PATH=$PATH:/practice-ui/node-v14.17.4-linux-x64/bin
RUN node --version && npm --version

# 安装yarn
RUN npm config set registry https://registry.npm.taobao.org
RUN npm i -g yarn
RUN yarn config set registry https://registry.npm.taobao.org

# 安装serve
RUN yarn global add serve@12.0.0
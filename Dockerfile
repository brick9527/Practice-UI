FROM registry.cn-hangzhou.aliyuncs.com/fdblogimages/practice-ui-base:0.1.0

LABEL author="brick9527<brick9527@foxmail.com>"
LABEL name="practice_ui_base"

USER root
WORKDIR /practice-ui
COPY build /practice-ui

EXPOSE 8080

ENTRYPOINT ["sh","-c","serve -s /practice-ui -p 8080"]

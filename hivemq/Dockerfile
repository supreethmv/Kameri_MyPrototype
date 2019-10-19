# ARG TAG=latest
# (1)
FROM hivemq/hivemq3
# # (2)
# ENV MY_CUSTOM_PLUGIN_ENV myvalue 
# # (3)
ENV HIVEMQ_CLUSTER_PORT 8000
ENV HIVEMQ_WEB_UI_USER admin
ENV HIVEMQ_WEB_UI_PASSWORD hivemq

# (4)
COPY --chown=hivemq:hivemq myconfig.xml /opt/hivemq/conf/config.xml
COPY wso2carbon.jks /opt/hivemq/conf/wso2carbon.jks


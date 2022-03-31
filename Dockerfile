FROM centos:latest
RUN cd /etc/yum.repos.d/
RUN sed -i 's/mirrorlist/#mirrorlist/g' /etc/yum.repos.d/CentOS-*
RUN sed -i 's|#baseurl=http://mirror.centos.org|baseurl=http://vault.centos.org|g' /etc/yum.repos.d/CentOS-*

RUN yum -y install java

CMD /bin/bash

RUN mkdir /opt/tomcat/
WORKDIR /opt/tomcat
RUN curl -O https://downloads.apache.org/tomcat/tomcat-9/v9.0.60/bin/apache-tomcat-9.0.60.tar.gz   
RUN tar xvfz apache*.tar.gz
RUN mv apache-tomcat-9.0.60/* /opt/tomcat/.

WORKDIR /opt/tomcat/webapps
RUN curl -O -L https://github.com/pegasystems/uplus-wss/releases/download/1.4.0/uplus-wss_1.4.0.war
RUN mv uplus-wss_1.4.0.war uplus-wss.war
EXPOSE 8080

CMD ["/opt/tomcat/bin/catalina.sh", "run"]

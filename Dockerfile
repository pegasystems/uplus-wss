FROM ubuntu:22.04
RUN echo 'APT::Install-Suggests "0";' >> /etc/apt/apt.conf.d/00-docker
RUN echo 'APT::Install-Recommends "0";' >> /etc/apt/apt.conf.d/00-docker
RUN DEBIAN_FRONTEND=noninteractive \
  apt-get update \
  && apt-get install -y openjdk-11-jdk wget \
  && rm -rf /var/lib/apt/lists/*

CMD /bin/bash
RUN mkdir /opt/tomcat/
WORKDIR /opt/tomcat
RUN wget --no-check-certificate https://downloads.apache.org/tomcat/tomcat-9/v9.0.73/bin/apache-tomcat-9.0.73.tar.gz
RUN tar xvfz apache*.tar.gz
RUN mv apache-tomcat-9.0.73/* /opt/tomcat/.

WORKDIR /opt/tomcat/webapps
RUN wget --no-check-certificate https://github.com/pegasystems/uplus-wss/releases/download/1.5.0/uplus-wss_1.5.0.war
RUN mv uplus-wss_1.5.0.war uplus-wss.war
EXPOSE 8080

CMD ["/opt/tomcat/bin/catalina.sh", "run"]

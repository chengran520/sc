package com.gxhy.routine.domain;

import javax.persistence.Column;

public class ProcessModel {
		
	  @Column(name="ACCEPTID")
	  private String acceptId;
	  
	  @Column(name="HANDLE_TIME")
	  private String handleTime;
	  
	  @Column(name="USER_ID")
	  private String userId;
	  
	  @Column(name="USER_NAME")
	  private String userName;
	  
	  @Column(name="ADVICE")
	  private String advice;

		public String getAcceptId() {
			return acceptId;
		}
		
		public void setAcceptId(String acceptId) {
			this.acceptId = acceptId;
		}
		
		public String getAdvice() {
			return advice;
		}
		
		public void setAdvice(String advice) {
			this.advice = advice;
		}

		public String getUserName() {
			return userName;
		}

		public void setUserName(String userName) {
			this.userName = userName;
		}

		public String getHandleTime() {
			return handleTime;
		}

		public void setHandleTime(String handleTime) {
			this.handleTime = handleTime;
		}

		public String getUserId() {
			return userId;
		}

		public void setUserId(String userId) {
			this.userId = userId;
		}
	  
  
  
}

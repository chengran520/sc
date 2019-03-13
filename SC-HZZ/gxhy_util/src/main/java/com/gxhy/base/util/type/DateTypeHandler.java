/*
 *    Copyright 2009-2012 the original author or authors.
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */
package com.gxhy.base.util.type;

import java.sql.CallableStatement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.Date;

import org.apache.ibatis.type.BaseTypeHandler;
import org.apache.ibatis.type.JdbcType;
import org.apache.ibatis.type.TypeException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.gxhy.base.util.DateUtil;

/**
 * @author Clinton Begin
 */
public class DateTypeHandler extends BaseTypeHandler<Date> {
	private static Logger logger = LoggerFactory.getLogger( DateTypeHandler.class );
	 public void setParameter(PreparedStatement ps, int i, Date parameter, JdbcType jdbcType) throws SQLException {
		    if (parameter == null) {
		      if (jdbcType == null) {
		        throw new TypeException("JDBC requires that the JdbcType must be specified for all nullable parameters.");
		      }
//		      try {
//		        ps.setNull(i, jdbcType.TYPE_CODE);
//		      } catch (SQLException e) {
//		        throw new TypeException("Error setting null for parameter #" + i + " with JdbcType " + jdbcType + " . " +
//		        		"Try setting a different JdbcType for this parameter or a different jdbcTypeForNull configuration property. " +
//		        		"Cause: " + e, e);
//		      }
		      setNonNullParameter(ps, i, parameter, jdbcType);

		    } else {
		      setNonNullParameter(ps, i, parameter, jdbcType);
		    }
		  }

  @Override
  public void setNonNullParameter(PreparedStatement ps, int i, Date parameter, JdbcType jdbcType)
      throws SQLException {
    ps.setTimestamp(i, parameter==null?null:new Timestamp((parameter).getTime()));
  }

    @Override
    public Date getNullableResult(ResultSet rs, String columnName) throws SQLException {
        try {
            Timestamp sqlTimestamp = rs.getTimestamp(columnName);
            if (sqlTimestamp != null) {
                return new Date(sqlTimestamp.getTime());
            }
        }
        catch (Exception e) {
            logger.error( "获取时间字段数据异常,通过字符串进行获取转换",e );
            String timeStr = rs.getString( columnName );
            Date d = DateUtil.parseDate2( timeStr );
            return d;
        }
        return null;
    }

    @Override
    public Date getNullableResult(ResultSet rs, int columnIndex) throws SQLException {
        try {
            Timestamp sqlTimestamp = rs.getTimestamp(columnIndex);
            if (sqlTimestamp != null) {
                return new Date(sqlTimestamp.getTime());
            }
        }
        catch (Exception e) {
            logger.error( "获取时间字段数据异常,通过字符串进行获取转换",e );
            String timeStr = rs.getString( columnIndex );
            Date d = DateUtil.parseDate2( timeStr );
            return d;
        }
        return null;
    }

  @Override
  public Date getNullableResult(CallableStatement cs, int columnIndex)
      throws SQLException {
      try {
          Timestamp sqlTimestamp = cs.getTimestamp(columnIndex);
          if (sqlTimestamp != null) {
              return new Date(sqlTimestamp.getTime());
          }
      }
      catch (Exception e) {
          logger.error( "获取时间字段数据异常,通过字符串进行获取转换",e );
          String timeStr = cs.getString( columnIndex );
          Date d = DateUtil.parseDate2( timeStr );
          return d;
      }
      return null;
  }
}

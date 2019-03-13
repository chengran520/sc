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

import org.apache.ibatis.type.BaseTypeHandler;
import org.apache.ibatis.type.JdbcType;
import org.apache.ibatis.type.TypeException;

/**
 * @author Clinton Begin
 */
public class DoubleTypeHandler extends BaseTypeHandler<Double> {
	public void setParameter(PreparedStatement ps, int i, Double parameter, JdbcType jdbcType) throws SQLException {
	    if (parameter == null) {
	      if (jdbcType == null) { 
	        throw new TypeException("JDBC requires that the JdbcType must be specified for all nullable parameters.");
	      }
//	      try {
//	        ps.setNull(i, jdbcType.TYPE_CODE);
//	      } catch (SQLException e) {
//	        throw new TypeException("Error setting null for parameter #" + i + " with JdbcType " + jdbcType + " . " +
//	        		"Try setting a different JdbcType for this parameter or a different jdbcTypeForNull configuration property. " +
//	        		"Cause: " + e, e);
//	      }
	      setNonNullParameter(ps, i, parameter, jdbcType);

	    } else {
	      setNonNullParameter(ps, i, parameter, jdbcType);
	    }
	  }
  @Override
  public void setNonNullParameter(PreparedStatement ps, int i, Double parameter, JdbcType jdbcType)
      throws SQLException {
	  if(parameter==null)
		  ps.setNull(i, java.sql.Types.DOUBLE);
	  else
		  ps.setDouble(i, parameter);
  }

  @Override
  public Double getNullableResult(ResultSet rs, String columnName)
      throws SQLException {
    return rs.getDouble(columnName);
  }

  @Override
  public Double getNullableResult(ResultSet rs, int columnIndex)
      throws SQLException {
    return rs.getDouble(columnIndex);
  }

  @Override
  public Double getNullableResult(CallableStatement cs, int columnIndex)
      throws SQLException {
    return cs.getDouble(columnIndex);
  }
  @Override
  public Double getResult(ResultSet rs, String columnName) throws SQLException {
		return (rs.getString(columnName) == null) ? null : rs.getDouble(columnName); 
  }

  @Override
  public Double getResult(ResultSet rs, int columnIndex) throws SQLException {
  	return (rs.getString(columnIndex) == null) ? null : rs.getDouble(columnIndex);
  }
  
  @Override
  public Double getResult(CallableStatement cs, int columnIndex)   throws SQLException {
  	return (cs.getString(columnIndex) == null) ? null : cs.getDouble(columnIndex);
  }
}

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

import java.math.BigDecimal;
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
public class BigDecimalTypeHandler extends BaseTypeHandler<BigDecimal> {
	public void setParameter(PreparedStatement ps, int i, BigDecimal parameter, JdbcType jdbcType) throws SQLException {
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
  public void setNonNullParameter(PreparedStatement ps, int i, BigDecimal parameter, JdbcType jdbcType)
      throws SQLException {
    ps.setBigDecimal(i, parameter);
  }

  @Override
  public BigDecimal getNullableResult(ResultSet rs, String columnName)
      throws SQLException {
    return rs.getBigDecimal(columnName);
  }

  @Override
  public BigDecimal getNullableResult(ResultSet rs, int columnIndex)
      throws SQLException {
    return rs.getBigDecimal(columnIndex);
  }

  @Override
  public BigDecimal getNullableResult(CallableStatement cs, int columnIndex)
      throws SQLException {
    return cs.getBigDecimal(columnIndex);
  }
}

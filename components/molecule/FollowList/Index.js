import { Card, List } from "antd";
import { StopOutlined } from "@ant-design/icons";
import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

const FollowList = ({ header, data }) => (
  <List
    style={{ marginBottom: 20 }}
    grid={{ gutter: 4, xs: 2, md: 3 }}
    size="small"
    header={<div>{header}</div>}
    loadMore={<Button>더 보기</Button>}
    bordered
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <Card actions={[<StopOutlined key="stop" />]}>
          <Card.Meta description={item.nickname} />
        </Card>
      </List.Item>
    )}
  />
);

FollowList.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default FollowList;

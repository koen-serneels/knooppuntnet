package kpn.server.repository

import kpn.core.engine.changes.data.BlackList

trait BlackListRepository {

  def get: BlackList

  def save(blackList: BlackList): Unit
}